import { FakeData } from '../types';
import { faker } from '@faker-js/faker';
import { generateError } from './generateError.ts';

export const generateFakeRecords = (
  count: number,
  usersLength?: number,
  errorProbability?: number,
) => {
  const newFake = [];
  usersLength = usersLength ? usersLength : 0;
  for (let i = 0; i < count; i++) {
    const fakeUser: FakeData = {
      key: i + 1 + usersLength,
      id: usersLength + i + 1,
      identifier: faker.random.numeric(10),
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      address:
        faker.address.city() +
        ' ' +
        faker.address.streetAddress() +
        ' ' +
        faker.address.buildingNumber(),
      phone: faker.phone.number(),
    };

    generateError(fakeUser, errorProbability ? errorProbability : 0);

    newFake.push(fakeUser);
  }

  return newFake;
};
