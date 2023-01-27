import request from '../axios/index'

export function currencyList() {
  return request({
    method: 'get',
    url: 'bpi/currentprice.json'
  })
}


// export function currencyListData() {
//   return request({
//     method: 'get',
//     url: 'bpi/data.json'
//   })
// }
