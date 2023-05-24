export interface User {
  id?: string;
  username: string;
  email: string;
  password: string;
  registration_date: string;
  last_visit: string;
  status?: STATUS;
}

export const enum STATUS {
  ACTIVE = 'active',
  DEACTIVATED = 'deactivated',
}
