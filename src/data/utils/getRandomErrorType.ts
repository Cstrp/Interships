import { getRandomNum } from './getRandomNum.ts';

export const getRandomErrorType = () => {
  const errorTypes = ['delete', 'add', 'swap'];
  const randomIndex = getRandomNum(0, errorTypes.length - 1);
  return errorTypes[randomIndex];
};
