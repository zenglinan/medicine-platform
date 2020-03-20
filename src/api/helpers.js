import axios from 'ts-axios-new'

const urlMap = {
  development: 'http://49.233.137.79:4001',
  production: 'http://49.233.137.79:4001'
}
const baseUrl = urlMap[process.env.NODE_ENV]

export function get(url) {
  return function(params = {}) {
    console.log(baseUrl, url);
    return axios.get(baseUrl + url, {
      params
    }).then((res) => {
      return res.data
    }).catch((e) => {
    })
  }
}
