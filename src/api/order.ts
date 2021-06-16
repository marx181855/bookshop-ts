import request from './request'

// 订单预览数据， 从购物车进入预览，在预览中提交订单
export function orderPreview() {
  return request({
    url: '/api/orders/preview'
  })
}

// 创建订单
export function submitOrder(params) {
  return request({
    url: '/api/orders',
    method: 'POST',
    params
  })
}

// 订单详情
export function getOrderDetail(order:number) {
  return request({
    url: `/api/orders/${order}`,
    params: {
      include: 'user,orderDetails.goods'
    }
  })
}

// 获取订单列表
export function getOrderList(status = 0) {
  return request({
    url: '/api/orders',
    params: {
      status,
      include: 'user,orderDetails.goods'
    }
  })
}

// 获取物流详情
export function getExpressDetail(order:number) {
  return request({
    url: `/api/orders/${order}/express`
  })
}

// 确认收货
export function confirmReceipt(order:number) {
  return request({
    url: `/api/orders/${order}/confirm`,
    method: 'PATCH'
  })
}

export function commentGoods(order:number) {
  return request({
    url: `/api/orders/${order}/confirm`,
    method: 'PATCH'
  })
}
