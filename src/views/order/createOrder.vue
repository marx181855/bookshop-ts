<template>
  <div class="create-order">
    <van-nav-bar
      title="创建订单"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="address-wrap">
      <div class="name" @click="goTo">
        <span>{{ address.name }}</span>
        <span>{{ address.phone }}</span>
      </div>
      <div class="address">
        {{ address.province + address.city + address.county + address.address }}
      </div>
    </div>
    <div class="good">
      <div class="good-item" v-for="(item, index) in cartList" :key="index">
        <div class="good-img">
          <img v-lazy="item.goods.cover_url" alt />
        </div>
        <div class="good-desc">
          <div class="good-title">
            <span>{{ item.goods.title }}</span>
            <span>x{{ item.num }}</span>
          </div>
          <div class="good-btn">
            <div class="price">
              <small>￥</small>
              {{ item.goods.price + ".00" }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <van-submit-bar
      class="submit-all"
      :price="total * 100"
      button-text="生成订单"
      @submit="handleCreateOrder"
      >商品余额</van-submit-bar
    >
    <van-popup
      v-model:show="showPay"
      closeable
      :close-on-click-overlay="false"
      position="bottom"
      :style="{ height: '40%' }"
      @close="close"
    >
      <van-grid :border="false" :column-num="2">
        <van-grid-item>
          支付宝二维码
          <br />
          <van-image width="150" height="150" :src="aliyun" />
        </van-grid-item>
        <van-grid-item>
          微信支付二维码
          <br />
          <van-image width="150" height="150" :src="wechat" />
        </van-grid-item>
      </van-grid>
    </van-popup>
  </div>
</template>

<script>
import { defineComponent, computed, onMounted, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { Toast } from 'vant'
import { submitOrder, orderPreview } from 'api/order'
import { getPaymentStatus, getPaymentQRCode } from 'api/pay'

export default defineComponent({
  name: 'createOrder',
  setup() {
    const router = useRouter()
    const store = useStore()
    const state = reactive({
      cartList: [],
      address: {},
      showPay: false,
      orderNo: '',
      aliyun: '',
      wechat: ''
    })
    const initData = () => {
      Toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      orderPreview().then((res) => {
        let address = res.address.filter((n) => n.is_default === 1)
        console.log(!address.length)
        if (address.length === 0) {
          state.address = {
            address: '还没有设置默认地址，选择或者填写地址信息'
          }
        } else {
          state.address = address[0]
        }
        state.cartList = res.carts
        console.log(res)
      })
    }
    onMounted(() => {
      initData()
    })
    const goTo = () => {
      router.push({ path: '/address' })
    }

    const handleCreateOrder = () => {
      const params = {
        address_id: state.address.id
      }

      // 创建订单
      submitOrder(params).then((res) => {
        Toast.success('创建订单成功')
        store.dispatch('updateCart')

        state.showPay = true
        // 订单ID
        state.orderNo = res.id
        getPaymentQRCode(state.orderNo, { type: 'aliyun' }).then((res) => {
          console.log(res)
          state.aliyun = res.qr_code_url
          state.wechat = res.qr_code_url
        })

        // 轮询查看
        const timer = setInterval(() => {
          getPaymentStatus(state.orderNo).then((res) => {
            if (res === 2) {
              clearInterval(timer)
              router.push({ path: '/orderdetail', query: { id: state.orderNo } })
            }
          })
        }, 2000)
      })
    }
    const close = () => {
      router.push({ path: '/orderdetail', query: { id: state.orderNo } })
    }
    const total = computed(() => {
      let sum = 0
      state.cartList.forEach((item) => {
        sum += parseInt(item.num) * parseFloat(item.goods.price)
      })
      return sum
    })
    return {
      ...toRefs(state),
      goTo,
      handleCreateOrder,
      close,
      total
    }
  }
})
</script>

<style lang="scss" scoped>
.create-order {
  background: #f9f9f9;
  .address-wrap {
    position: fixed;
    text-align: left;
    margin-bottom: 20px;
    background: #fff;
    font-size: 14px;
    padding: 15px;
    color: #222333;
    .name,
    .address {
      margin: 10px 0;
    }
    .arrow {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 20px;
    }
    &::before {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 2px;
      background: -webkit-linear-gradient();
      background-size: 80px;
      content: "";
    }
  }
  .good {
    position: fixed;
    width: 100%;
    top: 150px;
    bottom: 100px;
    overflow: auto;
  }
  .good-item {
    padding: 10px;
    background: #fff;
    display: flex;
    .good-img {
      img {
        width: 100px;
        height: auto;
      }
    }
    .good-desc {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
      padding: 20px;
      .good-title {
        display: flex;
        justify-content: space-between;
      }
      .good-btn {
        display: flex;
        justify-content: space-between;
        .price {
          font-size: 16px;
          color: red;
          line-height: 28px;
        }
        .van-icon-delete {
          font-size: 20px;
          margin-top: 4px;
        }
      }
    }
  }
  .pay-wrap {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    padding: 10px 0;
    padding-bottom: 50px;
    border-top: 1px solid #e9e9e9;
    > div {
      display: flex;
      justify-content: space-between;
      padding: 0 5%;
      margin: 10px 0;
      font-size: 14px;
      span:nth-child(2) {
        color: red;
        font-size: 18px;
      }
    }
    .pay-btn {
      position: fixed;
      bottom: 7px;
      right: 0;
      left: 0;
      width: 90%;
      margin: 0 auto;
    }
  }
}
.submit-all {
  margin-bottom: 50px;
  z-index: 9 !important;
}
</style>
