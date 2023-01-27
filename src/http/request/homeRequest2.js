import request from '../axios/indexCopy2'

export function pageList() {
  return request({
    method: 'get',
    url: 'entries'
  })
}
