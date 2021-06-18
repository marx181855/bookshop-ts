<template>
  <van-nav-bar
    title="订单列表"
    left-text="返回"
    left-arrow
    @click-left="$router.go(-1)"
  />
  <div class="box">
    <div class="tag-bar">
      <van-tabs v-model:active="currentTab" @click="switchTab">
        <van-tab title="全部"></van-tab>
        <van-tab title="已下单"></van-tab>
        <van-tab title="已支付"></van-tab>
        <van-tab title="已发货"></van-tab>
        <van-tab title="已收货"></van-tab>
        <van-tab title="已过期"></van-tab>
      </van-tabs>
    </div>
    <div class="order-list">
      <orderItem
        :orderInfo="item"
        v-for="item in orderList"
        v-bind:key="item.id"
      ></orderItem>
    </div>
    <div class="tip-text" v-show="!orderList.length">
      <p>暂时还没有订单哦!!!</p>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import { onMounted } from '@vue/runtime-core'
import { Toast } from 'vant'
import orderItem from './childComponents/orderItem.vue'
import { getOrderList } from 'api/order'

export default defineComponent({
  components: {
    orderItem
  },
  setup() {
    const state = reactive({
      orderList: [],
      currentTab: 0
    })
    const initData = () => {
      getOrderList().then(res => {
        console.log(res)
        state.orderList = res.data
      })
    }
    onMounted(() => {
      Toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      initData()
      Toast.clear()
    })
    const switchTab = () => {
      Toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      console.log('🚀 ~ file: Order.vue ~ line 59 ~ switchTab ~ state.currentTab', state.currentTab)

      getOrderList(state.currentTab).then(res => {
        console.log(res)
        state.orderList = res.data
        console.log(state.orderList.length)
        Toast.clear()
      })
    }
    return {
      ...toRefs(state),
      switchTab
    }
  }
})
</script>

<style lang="scss" scoped>
.box {
  position: fixed;
  top: 45px;
  width: 100%;
  bottom: 50px;
  .order-list {
    position: fixed;
    width: 100%;
    bottom: 50px;
    top: 89px;
    overflow: auto;
  }
  .tip-text {
    position: fixed;
    width: 100%;
    top: 89px;
    bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

// 改变组件样式
.van-tabs__wrap--scrollable .van-tab {
  padding: 0;
}
.van-tab--active {
  font-weight: bold;
}
</style>
