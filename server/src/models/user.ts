import { STATUS } from '../enums';

export interface User {
  id?: string;
  username: string;
  email: string;
  password: string;
  registration_date?: number;
  last_visit?: number | null;
  status?: STATUS;
}
