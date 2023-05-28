export const enum MESSAGES {
  SUCCESS_AUTHORIZATION = 'Authorization successful.',
  FAILED_AUTHORIZATION = 'Authorization failed.',
  REQ_USERNAME_OR_PASSWORD = 'Username, email, and password are required.',
  FAILED_CREATE_NEW_USER = 'Failed to create a new user.',
  ALREADY_EXIST = 'A user with the same username or email already exists.',
  SUCCESS_CREATE_USER = 'New user successfully created.',
  FAILED_UPDATE_USER_LAST_VISIT = 'Failed to update user last visit.',
  INVALID_REQUEST = 'Error! User not created or disabled.',
  UNAUTHORIZED = 'Unauthorized.',
  INVALID_TOKEN = 'Invalid token.',
  FAILED = 'Operation failed.',
  SUCCESSFULLY = 'Operation completed successfully.',
  FAILED_UPDATE = 'Update operation failed.',
  SUCCESSFULLY_UPDATE = 'Status update(s) completed successfully.',
  USER_NOT_FOUND = 'User not found.',
  DELETE_SUCCESS = 'Removal was successful.',
}
