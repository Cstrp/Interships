import bcrypt from 'bcrypt';

const salt: string = bcrypt.genSaltSync(12);

const encrypt = (value: string): string => bcrypt.hashSync(value, salt);

const checkPassword = (value: string, hash: string): boolean => bcrypt.compareSync(value, hash);

const checkBody = (body: object, keys: string[]): string | null => {
  const bodyKeys = Object.keys(body);

  if (bodyKeys.length === 0) return 'Body is required';

  for (const key of keys) {
    const hasBodyProperties = Object.prototype.hasOwnProperty.call(body, key);
    if (!hasBodyProperties) return `${key} is required`;
  }

  if (bodyKeys.length > keys.length) {
    const props = bodyKeys.filter((prop) => !keys.includes(prop));

    return `Properties ${props.join(',')} should be existing and will be removed`;
  }

  return null;
};

export { encrypt, checkPassword, checkBody };
