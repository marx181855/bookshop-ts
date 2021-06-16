import request from './request'

export function getCategoryData() {
  return request({
    url: '/api/goods'
  })
}

export function getCategoryGoods(order = 'sales', cid = 0, page = 1) {
  return request({
    url: `/api/goods?category_id=${cid}&page=${page}&${order}=1`

  })
}

export function searchProduct(title:string, order = 'sales', cid = 0, page = 1) {
  return request({
    url: `/api/goods?category_id=${cid}&page=${page}&${order}=1&title=${title}`
  })
}
