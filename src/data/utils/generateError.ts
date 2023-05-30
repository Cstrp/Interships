import { faker } from '@faker-js/faker';
import { getRandomErrorType } from './getRandomErrorType.ts';
import { getRandomNumber } from './getRandomNumber.ts';

export const generateError = (user: any, errorProbability: number) => {
  for (let i = 0; i < errorProbability; i++) {
    const field = faker.helpers.arrayElement(['firstname', 'lastname', 'address', 'phone']);
    const value = user[field];

    if (value.length > 0) {
      const errorType = getRandomErrorType();

      const addIdx = getRandomNumber(0, value.length + 1);
      const randomChar = String.fromCharCode(getRandomNumber(97, 122));

      const deleteIdx = getRandomNumber(0, value.length);
      const swapIdx = getRandomNumber(0, value.length - 1);

      switch (errorType) {
        case 'add':
          user[field] = value.slice(0, addIdx) + randomChar + value.slice(addIdx);
          break;
        case 'delete':
          user[field] = value.slice(0, deleteIdx) + value.slice(deleteIdx + 1);
          break;
        case 'swap':
          user[field] =
            value.slice(0, swapIdx) +
            value.charAt(swapIdx + 1) +
            value.charAt(swapIdx) +
            value.slice(swapIdx + 2);
          break;
      }
    }
  }
};
