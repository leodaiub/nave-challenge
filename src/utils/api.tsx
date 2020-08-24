import axios from 'axios';
const api = axios.create({ baseURL: 'https://navedex-api.herokuapp.com/v1' });

api.interceptors.request.use(config => {
  if (localStorage.getItem('token'))
    config.headers.Authorization = `Bearer ${localStorage.token}`;

  return config;
});

api.interceptors.response.use(null as any, error => {
  if (error.response.status === 401) {
    localStorage.removeItem('token');
  }
});

export default api;
