import bcrypt from 'bcrypt';

const salt: string = bcrypt.genSaltSync(12);

const encrypt = (value: string): string => bcrypt.hashSync(value, salt);

const checkPassword = (value: string, hash: string): boolean => bcrypt.compareSync(value, hash);

export { encrypt, checkPassword };
