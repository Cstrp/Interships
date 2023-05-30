import { getRandNum } from './getRandNum.ts';

export const getRandErrType = () => {
  const errType = ['add', 'delete', 'swap'];
  const randIdx = getRandNum(0, errType.length - 1);

  return errType[randIdx];
};
