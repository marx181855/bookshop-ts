import request from './request'

export function getDetail(id:number) {
  return request({
    url: `/api/goods/${id}`
  })
}
