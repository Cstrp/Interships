import axios from 'axios';
import { API_URL } from '.';
import { getItem } from '../utils';

export const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.response.use(
  (value) => value,
  (error) => Promise.reject(error),
);

api.interceptors.request.use((config) => {
  const data = getItem('data');

  if (data) {
    config.headers['Authorization'] = data.token;
    config.headers['status'] = data.status;
  }
  return config;
});
