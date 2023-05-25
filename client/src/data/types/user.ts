import { STATUS } from '../enums';

export interface User {
  id?: number;
  username: string;
  email: string;
  password: string;
  registration_date: number & string;
  last_visit: (number & string) | null;
  status: STATUS;
}
