import request from './request'

// 添加地址
export function addAddress(params) {
  return request({
    url: '/api/address',
    method: 'POST',
    params
  })
}
// 编辑地址
export function editAddress(id:number, params) {
  return request({
    url: `/api/address/${id}`,
    method: 'PUT',
    params
  })
}
// 删除地址
export function deleteAddress(params:number) {
  return request({
    url: `/api/address/${params}`,
    method: 'DELETE'
  })
}
// 地址列表
export function getAddressList() {
  return request({
    url: '/api/address'
  })
}
// 地址详情
export function getAddressDetail(id:number) {
  return request({
    url: `/api/address/${id}`
  })
}
