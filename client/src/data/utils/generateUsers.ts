import { api } from '../api';
import { SignUpValues } from '../types';

export const generateUsers = async () => {
  try {
    const usersCount = 42;

    for (let i = 0; i < usersCount; i++) {
      const newUser: SignUpValues = {
        username: `John${i + 1}`,
        email: `john${i + 1}@example.com`,
        password: `${i + 1}`,
      };
      const res = await api.post('/sign_up', newUser);

      if (res) {
        console.log(res);
      }
    }
  } catch (error) {
    console.log(error);
  }
};
