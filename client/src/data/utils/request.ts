import { api } from './api.ts';
import { User } from '../types';
import { setItem } from './localStorage.ts';

const getUsers = async () => {
  try {
    const res = await api.get('/users');
    return res.data;
  } catch (error) {
    console.error(`Error while getting users ${error}`);
  }
};

const signIn = async (value: Pick<User, 'email' | 'password'>) => {
  try {
    const res = await api.post<{ message: string; token: string }>('/sign_in', value);

    if (res.data) {
      setItem('token', res.data.token);
    }

    return res.data;
  } catch (error) {
    console.error(`Error while signing in ${value}`);
  }
};

const signUp = async (value: Pick<User, 'username' | 'email' | 'password'>) => {
  try {
    const res = await api.post<{ message: string }>('/sign_up', value);

    return res.data.message;
  } catch (error) {
    console.error(`Error while signing up ${value}`);
  }
};

export { getUsers, signIn, signUp };
