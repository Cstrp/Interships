import axios, { AxiosError, AxiosResponse } from 'axios';
import { getItem } from './localStorage';
import {STATUS} from "../enums";

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
  const status = getItem('status');

  if (token)  config.headers['Authorization'] = `${token}`;
  if (status && status !== STATUS.DEACTIVATED) config.headers['status'] = `${status}`;

  return config;
});
