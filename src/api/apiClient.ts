import axios from 'axios';

import { REACT_APP_API_URL } from 'src/constants';

const client = axios.create({
  baseURL: REACT_APP_API_URL
});

client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  async (error) => {
    return await Promise.reject(error);
  }
);

client.defaults.headers.common = {
  'Content-Type': 'application/json'
};

const get = async (URL: string, params?: unknown) => {
  return await client.get(`${URL}`, { params }).then((response) => response);
};

const post = async (URL: string, payload?: unknown) => {
  return await client.post(`${URL}`, payload).then((response) => response);
};

const patch = async (URL: string, payload: unknown) => {
  return await client.patch(`${URL}`, payload).then((response) => response);
};

const delete_req = async (URL: string) => {
  return await client.delete(`${URL}`).then((response) => response);
};

const apiClient = {
  post,
  get,
  patch,
  delete_req
};

export { apiClient };
