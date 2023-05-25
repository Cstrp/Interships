import { api, setItem } from '.';
import { User } from '../types';
import { STATUS } from '../enums';
import { GridRowId } from '@mui/x-data-grid';
import { UpdateStatus } from '../types/updateStatus';

const getUsers = async () => {
  try {
    const res = await api.get<{ message: string; users: User[] }>('/users');
    return res.data;
  } catch (error) {
    console.error(`Error while getting users ${error}`);
  }
};

const signIn = async (value: Pick<User, 'email' | 'password'>) => {
  try {
    const res = await api.post<{ message: string; token: string }>('/sign_in', value);

    if (res.data.token) setItem('token', `${res.data.token}`);

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

const updateStatus = async (upd: UpdateStatus) => {
  try {
    const res = await api.put<{ message: string }>(`/users/update`, upd);

    return res.data.message;
  } catch (error) {
    console.error(`Error while updating user:  - ${error}`);
  }
};

const updateAllStatus = async (newStatus: STATUS) => {
  try {
    const res = await api.put<{ message: string }>('/users/update_all', newStatus);

    return res.data.message;
  } catch (error) {
    console.error(`Error while updating users status ${error}`);
  }
};

const deleteUser = async (id: GridRowId) => {
  try {
    const res = await api.delete<{ message: string }>(`/users/${id}`);

    return res.data.message;
  } catch (error) {
    console.error(`Error while delete user ${error}`);
  }
};

export { getUsers, signIn, signUp, updateStatus, updateAllStatus, deleteUser };
