import { Requests } from './requests';

export type SignInData = Pick<Requests, 'message' | 'token' | 'status' | 'id'>;
