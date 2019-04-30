import axios from 'axios';

const BASE_URL = 'https://app.rakuten.co.jp/services/api/Travel/';
const SIMPLE_HOTEL_URL = `${BASE_URL}SimpleHotelSearch/20170426`

export default {
  simpleHotelSearch: params => axios.get(SIMPLE_HOTEL_URL, { params }),
};