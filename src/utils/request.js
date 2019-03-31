import axios from 'axios';
import qs from 'querystring';

import api from 'config/api';

export default axios.create({
  baseURL: api.baseUrl,
  headers: api.headers
  // paramsSerializer: params => qs.stringify(params)
});
