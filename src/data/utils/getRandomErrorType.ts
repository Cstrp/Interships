import { getRandomNumber } from './getRandomNumber.ts';

export const getRandomErrorType = () => {
  const errType = ['add', 'delete', 'swap'];
  const randomNumber = getRandomNumber(0, errType.length - 1);

  return errType[randomNumber];
};
