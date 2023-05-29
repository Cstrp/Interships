import { Faker, fr, pl, ru } from '@faker-js/faker';
import { FakeData, Region, Regions } from '../types';

export const generateData = (region: Regions): FakeData => {
  const regions: Region = {
    ru: ru,
    fr: fr,
    pl: pl,
  };

  const faker = new Faker({ locale: regions[region] });

  const firstname = faker.person.firstName();
  const lastname = faker.person.lastName();
  const address = faker.location.city() + ' ' + faker.location.streetAddress();
  const phone = faker.phone.number();

  return {
    identifier: Array.from({ length: 20 }, () => faker.string.uuid()),
    firstname: Array.from({ length: 20 }, () => firstname),
    lastname: Array.from({ length: 20 }, () => lastname),
    address: Array.from({ length: 20 }, () => address),
    phone: Array.from({ length: 20 }, () => phone),
  };
};
