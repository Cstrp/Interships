import { faker } from '@faker-js/faker';
import { FakeData } from '../types';

export const generateFakeRecords = (count: number, startIndex: number) => {
  const newFake: FakeData[] = [];

  for (let i = 0; i < count; i++) {
    const fakeUser: FakeData = {
      id: startIndex + i + 1,
      key: i + 1 + startIndex,
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

    newFake.push(fakeUser);
  }

  return newFake;
};
