import { api } from './api_interceptor';
import { Dispatch, SetStateAction } from 'react';
import { Message } from '../types';

export const check_health = async (setMessage: Dispatch<SetStateAction<string>>) => {
  try {
    const res = await api.get<Message>('/check_health');

    if (res) {
      setMessage(res.data.message);
    }
  } catch (error: any) {
    setMessage(error.message);
  }
};
