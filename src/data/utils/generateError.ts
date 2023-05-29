import { getRandomErrorType } from './getRandomErrorType.ts';
import { getRandomInt } from './getRandomInt.ts';

export const generateError = (value: string, errorProbability: number) => {
  if (Math.random() <= errorProbability) {
    const errorType = getRandomErrorType();

    const deleteIndex = getRandomInt(0, value.length - 1);
    const addIndex = getRandomInt(0, value.length);
    const randomChar = String.fromCharCode(getRandomInt(97, 122));
    const swapIndex = getRandomInt(0, value.length - 2);

    switch (errorType) {
      case 'delete':
        return value.slice(0, deleteIndex) + value.slice(deleteIndex + 1);
      case 'add':
        return value.slice(0, addIndex) + randomChar + value.slice(addIndex);
      case 'swap':
        return (
          value.slice(0, swapIndex) +
          value.charAt(swapIndex + 1) +
          value.charAt(swapIndex) +
          value.slice(swapIndex + 2)
        );
    }
  }
  return value;
};
