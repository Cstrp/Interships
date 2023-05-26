import { api, setItem } from '.';
import { Message, SignInData, User, UserData } from '../types';
import { STATUS } from '../enums';

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

const updateStatus = async (upd: { status: STATUS; ids: number[] }) => {
  try {
    const res = await api.put<Message>('/users/update', upd);

    return res.data.message;
  } catch (error) {
    console.error(`Error while updating users: - ${error} `);
  }
};

const deleteUser = async (ids: { ids: number[] }) => {
  try {
    const res = await api.put<Message>(`/users/delete`, ids);

    return res.data;
  } catch (error) {
    console.error(`Error while delete user ${error}`);
  }
};

export { getUsers, signIn, signUp, updateStatus, deleteUser };
