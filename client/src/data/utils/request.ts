import { api, setItem } from '.';
import { Message, SignInData, User, UserData } from '../types';
import { STATUS } from '../enums';
import { GridRowId } from '@mui/x-data-grid';
import { UpdateStatus } from '../types/updateStatus';

const getUsers = async () => {
  try {
    const res = await api.get<UserData>('/users');
    return res.data;
  } catch (error) {
    console.error(`Error while getting users ${error}`);
  }
};

const signIn = async (value: Pick<User, 'email' | 'password'>) => {
  try {
    const res = await api.post<SignInData>('/sign_in', value);

    if (res.data) {
      setItem('id', res.data.id);
      setItem('status', res.data.status);
      setItem('token', res.data.token);
    }

    return res.data;
  } catch (error) {
    console.error(`Error while signing in ${error}`);
  }
};

const signUp = async (value: Pick<User, 'username' | 'email' | 'password'>) => {
  try {
    const res = await api.post<Message>('/sign_up', value);

    return res.data.message;
  } catch (error) {
    console.error(`Error while signing up ${value}`);
  }
};

const updateStatus = async (upd: UpdateStatus) => {
  try {
    const res = await api.put<Message>(`/users/update`, upd);

    return res.data.message;
  } catch (error) {
    console.error(`Error while updating user:  - ${error}`);
  }
};

const updateMultipleStatus = async (upd: { status: STATUS; ids: number[] }) => {
  try {
    const res = await api.put<Message>('/users/update_multiple', upd);

    return res.data.message;
  } catch (error) {
    console.error(`Error while updating users: - ${error} `);
  }
};

const updateAllStatus = async (status: STATUS) => {
  try {
    const res = await api.put<Message>('/users/update_all', status);

    return res.data.message;
  } catch (error) {
    console.error(`Error while updating users status ${error}`);
  }
};

const deleteUser = async (id: GridRowId) => {
  try {
    const res = await api.delete<Message>(`/users/${id}`);

    return res.data.message;
  } catch (error) {
    console.error(`Error while delete user ${error}`);
  }
};

export { getUsers, signIn, signUp, updateStatus, updateAllStatus, deleteUser, updateMultipleStatus };
