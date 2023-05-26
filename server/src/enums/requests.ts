export const enum REQUESTS {
  SELECT_ALL_USERS = 'select * from users',
  FIND_USER_BY_EMAIL = 'select * from users where email = ?',
  FIND_USER_BY_USERNAME_OR_EMAIL = 'select * from users where username = ? or email = ?',
  FIND_USER_BY_ID = 'select * from users where id = ?',
  UPDATE_LAST_VISIT = 'update users set last_visit = ? where id = ?',
  CREATE_USER = 'insert into users set ?',
  UPDATE_USER_STATUS = 'update users set status = ? where id in (?)',
  DELETE_USERS = 'delete from users where id in (?)',
}
