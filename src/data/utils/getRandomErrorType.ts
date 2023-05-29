import { getRandomInt } from './getRandomInt.ts';

export const getRandomErrorType = () => {
  const errorTypes = ['delete', 'add', 'swap'];
  const randomIndex = getRandomInt(0, errorTypes.length - 1);
  return errorTypes[randomIndex];
};
