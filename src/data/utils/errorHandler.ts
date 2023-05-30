import { faker } from '@faker-js/faker';
import { getRandErrType } from './getRandErrType.ts';
import { getRandNum } from './getRandNum.ts';

export const errorHandler = (user: any, errorProbability: number) => {
  for (let i = 0; i < errorProbability; i++) {
    const field = faker.helpers.arrayElement(['firstname', 'lastname', 'address', 'phone']);
    const value = user[field];

    if (value.length > 0) {
      const errorType = getRandErrType();

      const addIdx = getRandNum(0, value.length + 1);
      const randomChar = String.fromCharCode(getRandNum(97, 122));

      const deleteIdx = getRandNum(0, value.length);
      const swapIdx = getRandNum(0, value.length - 1);

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
