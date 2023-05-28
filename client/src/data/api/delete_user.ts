import { api } from './api_interceptor';
import { Message } from '../types';
import { Dispatch, SetStateAction } from 'react';

export const delete_user = async (
  ids: { ids: number[] },
  setMessage?: Dispatch<SetStateAction<string>>,
): Promise<void> => {
  try {
    const res = await api.put<Message>('/users/delete', ids);

    if (res) setMessage!(res.data.message);
  } catch (error: any) {
    setMessage!(error.message);
  }
};
