import { Requests } from './requests';

export type UserData = Pick<Requests, 'message' | 'users'>;
