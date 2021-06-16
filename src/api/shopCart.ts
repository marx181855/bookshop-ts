import request from './request'

// 添加购物车
export function addCart(data) {
  return request({
    url: '/api/carts',
    method: 'post',
    data
  })
}

// 获取购物车列表
export function getCartList(data = '') {
  return request({
    // api/carts?includ=goods
    url: '/api/carts?' + data

  })
}

// 修改购物车， data = {num:1}
export function modifyCart(id, data) {
  return request({
    url: `/api/carts/${id}`,
    method: 'put',
    data
  })
}

// 删除购物车
export function deleteCartItem(id:number) {
  return request({
    url: `/api/carts/${id}`,
    method: 'delete'
  })
}

// 选择商品的状态 chekced，所有选中的ID
export function checkedCart(data) {
  return request({
    url: '/api/carts/checked',
    method: 'patch',
    data
  })
}
