import axios, { AxiosError, AxiosResponse } from 'axios';
import { getItem } from './localStorage.ts';

export const API_URL = 'http://localhost:3060/api';

export const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.response.use(
  (res: AxiosResponse) => res,
  (err: AxiosError) => Promise.reject(err),
);

api.interceptors.request.use((config) => {
  const token = getItem('token');

  if (token) config.headers['Authorization'] = 'Bearer ' + token;

  return config;
});
