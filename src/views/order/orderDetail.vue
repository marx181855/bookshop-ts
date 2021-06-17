<template>
  <div class="order-detail-box">
    <van-nav-bar
      title="订单详情"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="order-status">
      <div class="status-item">
        <label>订单状态：</label>
        <span>{{ statusString }}</span>
      </div>
      <div class="status-item">
        <label>订单编号：</label>
        <span>{{ detail.order_no }}</span>
      </div>
      <div class="status-item">
        <label>下单时间：</label>
        <span>{{ detail.created_at }}</span>
      </div>
      <van-button
        v-if="detail.status == 1"
        @click="showPayFn"
        style="margin-bottom: 10px"
        color="#1baeae"
        block
        >去支付</van-button
      >
      <van-button v-if="detail.status == 3" @click="handleConfirmOrder"
        >确认订单</van-button
      >
    </div>
    <div class="order-price">
      <div class="price-item">
        <label>商品金额：</label>
        <span>￥{{ total + ".00" }}</span>
      </div>
      <div class="price-item">
        <label>配送方式：</label>
        <span>普通快递</span>
      </div>
    </div>

    <div class="goods">
      <van-card
        v-for="item in detail.orderDetails.data"
        :key="item.id"
        :num="item.num"
        :price="item.price"
        desc="全场包邮"
        :title="item.goods.title"
        :thumb="item.goods.cover_url"
      />
    </div>
    <div style="width: 100%; height: 50px"></div>
    <van-popup
      v-model:show="showPay"
      position="bottom"
      :style="{ height: '40%' }"
    >
      <div :style="{ width: '90%', margin: '0 auto', padding: '50px 0' }">
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
      </div>
    </van-popup>
  </div>
</template>

<script>
import { defineComponent, computed, onMounted, reactive, toRefs } from 'vue'

import { useRouter, useRoute } from 'vue-router'
import { Toast, Dialog } from 'vant'
import { getOrderDetail, confirmReceipt } from 'api/order'
import { getPaymentStatus, getPaymentQRCode } from 'api/pay'
export default defineComponent({

  setup() {
    const route = useRoute()
    const router = useRouter()
    // const store = useStore()
    const state = reactive({
      orderNo: '', // 订单ID
      detail: {
        orderDetails: {
          data: []
        }
      },
      showPay: false,
      aliyun: '',
      wechat: ''
    })
    const init = () => {
      const { id } = route.query
      state.orderNo = id
      getOrderDetail(id).then((res) => {
        console.log(res)
        state.detail = res
      })
    }

    onMounted(() => {
      Toast.loading({ message: '加载中...', forbidClick: true })
      init()
      Toast.clear()
    })
    const statusString = computed(() => {
      // 1下单 2支付 3发货 4收货 5过期
      let status = ['', '已下单', '已支付', '等待发货', '确认收货', '已过期']
      return status[state.detail.status]
    })
    const total = computed(() => {
      let sum = 0
      state.detail.orderDetails.data.forEach((item) => {
        sum += item.num * item.price
      })
      return sum
    })
    const showPayFn = () => {
      state.showPay = true
      getPaymentQRCode(state.orderNo, { type: 'aliyun' }).then((res) => {
        console.log(res)
        state.aliyun = res.qr_code_url
        state.wechat = res.qr_code_url
      })
      const timer = setInterval(() => {
        getPaymentStatus(state.orderNo).then((res) => {
          if (res === 2) {
            clearInterval(timer)
            state.showPay = false
            router.push({ path: '/orderdetail', query: { id: state.orderNo } })
          }
        })
      }, 2000)
    }
    const handleConfirmOrder = () => {
      Dialog.confirm({
        title: '是否确认订单'
      })
        .then(() => {
          confirmReceipt(state.orderNo).then(res => {
            console.log(res)
            if (res.status_code === 204) {
              Toast('确认成功')
              init()
            }
          })
        })

    }
    const close = () => {
      Dialog.close()
    }
    return {
      ...toRefs(state),
      statusString,
      total,
      showPayFn,
      handleConfirmOrder,
      close
    }
  }
})
</script>

<style lang="scss" scoped>
.order-status {
  position: fixed;
  width: 100%;
  top: 45px;
  .status-item {
    text-align: left;
    padding: 5px;
    label {
      color: grey;
    }
  }
  .van-button {
    margin-bottom: 20px;
  }
}
.order-price {
  position: fixed;
  top: 190px;
  margin-left: 10px;
  label {
    color: grey;
  }
}
.goods {
  position: fixed;
  top: 240px;
  width: 100%;
  bottom: 50px;
  overflow: auto;
}
</style>
