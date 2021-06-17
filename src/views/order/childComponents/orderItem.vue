<template>
  <div class="order-card">
    <div class="order-status">
      <div class="status-item">
        <label>订单状态：</label>
        <span>{{ orderStatus }}</span>
      </div>
      <div class="status-item">
        <label>订单编号：</label>
        <span>{{ orderInfo.order_no }}</span>
      </div>
      <div class="status-item">
        <label>下单时间：</label>
        <span>{{ orderInfo.created_at }}</span>
      </div>
    </div>
    <div class="order-price">
      <div class="price-item">
        <label>商品总额：</label>
        <span>￥{{ orderInfo.amount + ".00" }}</span>
      </div>
      <div class="price-item">
        <label>配送方式：</label>
        <span>普通快递</span>
      </div>
    </div>
    <van-card
      v-for="item in orderInfo.orderDetails.data"
      :key="item.id"
      :num="item.num"
      :price="item.price"
      desc="全场包邮"
      :title="item.goods.title"
      :thumb="item.goods.cover_url"
      @click="$router.push({ path: '/goodDetail', query: { id:item.goods.id } })"
    />
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'

export default {
  props: {
    orderInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  setup(props) {
    const orderStatus = computed(() => {
      let status = ['', '已下单', '已支付', '等待发货', '确认收货', '已过期']
      return status[props.orderInfo.status]
    })

    return {
      orderStatus
    }
  }

}
</script>

<style lang="scss" scoped>
.order-card {
  text-align: left;
  padding: 20px;
  border-bottom: 8px solid #8080803b;
}
</style>
