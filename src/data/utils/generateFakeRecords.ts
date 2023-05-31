import { FakeData } from '../types';
import { faker } from '@faker-js/faker';
import { generateError } from './generateError.ts';

export const generateFakeRecords = (
  count: number,
  usersLength: number,
  errorProbability: number,
) => {
  const newFake = [];
  usersLength = usersLength ? usersLength : 0;
  for (let i = 0; i < count; i++) {
    const fakeUser: FakeData = {
      id: usersLength + i + 1,
      key: i + 1 + usersLength,
      identifier: faker.random.numeric(10, { allowLeadingZeros: true }),
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

    generateError(fakeUser, errorProbability);

    newFake.push(fakeUser);
  }

  return newFake;
};
