import { get } from './helpers'

const getSeller = get('/seller')
const getGoods = get('/goods')

export {
  getSeller,
  getGoods
}
