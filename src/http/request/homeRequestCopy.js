import request from '../axios/indexCopy'

export function currencyList2() {
  return request({
    method: 'get',
    url: 'users'
  })
}
export function currencyList3() {
  return request({
    method: 'get',
    url: 'posts/1/comments'
  })
}
