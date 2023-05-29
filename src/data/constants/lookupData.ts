import { fakerEN_US, fakerFR, fakerPL } from '@faker-js/faker';

type LookupData = { [key: string]: { [key: string]: string[] } };

export const lookupData: LookupData = {
  Poland: {
    firstnames: Array.from({ length: 50 }, () => fakerPL.person.firstName()),
    lastnames: Array.from({ length: 100 }, () => fakerPL.person.lastName()),
    address: Array.from(
      { length: 50 },
      () =>
        fakerPL.location.city() +
        fakerPL.location.streetAddress() +
        ' ' +
        fakerPL.location.buildingNumber(),
    ),
    phone: Array.from({ length: 50 }, () => fakerPL.phone.number()),
  },
  Usa: {
    firstnames: Array.from({ length: 100 }, () => fakerEN_US.person.firstName()),
    lastnames: Array.from({ length: 30 }, () => fakerEN_US.person.lastName()),
    address: Array.from(
      { length: 20 },
      () => fakerEN_US.location.city() + ' ' + fakerEN_US.location.streetAddress(),
    ),
    phone: Array.from({ length: 50 }, () => fakerEN_US.phone.number()),
  },
  France: {
    firstnames: Array.from({ length: 20 }, () => fakerFR.person.firstName()),
    lastnames: Array.from({ length: 20 }, () => fakerFR.person.lastName()),
    address: Array.from(
      { length: 20 },
      () => fakerFR.location.city() + fakerFR.location.streetAddress(),
    ),
    phone: Array.from({ length: 20 }, () => fakerFR.phone.number()),
  },
};
