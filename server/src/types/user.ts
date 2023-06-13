export interface User {
  id?: number;
  username: string;
  email: string;
  password: string;
  role?: Role;
}

export const enum Role {
  USER = "user",
  ADMIN = "admin",
}
