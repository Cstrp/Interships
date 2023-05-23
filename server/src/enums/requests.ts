export const enum REQUESTS {
  FIND_USER_BY_EMAIL = 'select * from users where email = ?',
  FIND_USER_BY_USERNAME_OR_EMAIL = 'select * from users where username = ? or email = ?',
  FIND_USER_BY_ID = 'select * from users where id = ?',
  CREATE_USER = 'insert into users set ?',
  UPDATE_LAST_VISIT = 'update users set last_visit = ? where id = ?',
  UPDATE_USER_STATUS = `update users set status = ? where id = ?`,
  UPDATE_USERS_STATUS = 'update users set status = ? ',
  FIND_USER_BY_ID_AND_DELETE = 'delete FROM users where id = ?',
}
