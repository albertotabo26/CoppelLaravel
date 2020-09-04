import axios from 'axios'
import config from './config'

var api = axios.create({
    baseURL: config.baseURL
});

export default api
