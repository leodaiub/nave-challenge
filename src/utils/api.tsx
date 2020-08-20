import axios from 'axios';
import i18next from 'i18next';

const api = axios.create({ baseURL: process.env.REACT_APP_API_URL });

api.interceptors.request.use(config => {
  if (localStorage.getItem('token'))
    config.headers.auth = `${localStorage.token}`;

  return config;
});

api.interceptors.response.use(null as any, error => {
  if (error.response.status === 401) {
    localStorage.removeItem('token');
  }
});

export default api;
