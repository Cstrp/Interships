import { User } from './user';

export type SignUpValues = Pick<User, 'username' | 'email' | 'password'>;

export type SignInValues = Pick<User, 'email' | 'password'>;
