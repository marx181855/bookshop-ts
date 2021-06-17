import request from './request'

export function getCategoryData() {
  return request({
    url: '/api/goods'
  })
}

export function getCategoryGoods(orderType = 'sales', categoryId = 0, page = 1) {
  return request({
    url: `/api/goods?category_id=${categoryId}&page=${page}&${orderType}=1`

  })
}

export function searchProduct(title:string, orderType = 'sales', categoryId = 0, page = 1) {
  return request({
    url: `/api/goods?category_id=${categoryId}&page=${page}&${orderType}=1&title=${title}`
  })
}
