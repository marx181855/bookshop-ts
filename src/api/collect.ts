import  request  from './request'

export function getMycollection(page = 0) {
  return request({
    url: '/api/collects',
    page
  })
}

export function collectAndCancel(data) {
  return request({
    url: `/api/collects/goods/${data}`,
    method: 'POST'
  })
}
