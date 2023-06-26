export interface User {
  id?: number;
  username: string;
  email: string;
  password: string;
  role?: ROLE;
}

export const enum ROLE {
  USER = "user",
  ADMIN = "admin",
}
