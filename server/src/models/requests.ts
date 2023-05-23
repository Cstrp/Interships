export const enum REQUESTS {
  FIND_USER_BY_EMAIL = 'SELECT * FROM users WHERE email = ?',
  FIND_USER_BY_USERNAME_OR_EMAIL = 'SELECT * FROM users WHERE username = ? OR email = ?',
  CREATE_USER = 'INSERT INTO users SET ?',
}
