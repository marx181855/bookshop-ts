import  request  from './request'

// 查询支付状态
export function getPaymentStatus(order:number) {
  return request({
    url: `/api/orders/${order}/status`
  })
}

// 获取支付二维码
export function getPaymentQRCode(order:number, params) {
  return request({
    url: `/api/orders/${order}/pay`,
    params
  })
}
