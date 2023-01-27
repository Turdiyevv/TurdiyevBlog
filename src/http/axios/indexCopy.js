import axios from 'axios'
import config from '../../config/main.json'

const instance = axios.create({
  baseURL: config.API_URL2,
  timeout: 3000
  // headers: {Language: 'en'}
})
export default instance 


