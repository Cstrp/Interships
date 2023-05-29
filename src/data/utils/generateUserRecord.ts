import { lookupData } from '../constants';
import { getRandomInt } from './getRandomInt.ts';
import { generateError } from './generateError.ts';

export const generateUserRecord = (region: string, errorProbability: number, seed: number) => {
  const { firstnames, lastnames, address, phone } = lookupData[region];

  const randomIndex = getRandomInt(0, firstnames.length - 1);
  const firstName = generateError(firstnames[randomIndex], errorProbability);

  const randomLastnameIndex = getRandomInt(0, firstnames.length - 1);
  const lastName = generateError(lastnames[randomLastnameIndex], errorProbability);

  const randomAddressIndex = getRandomInt(0, address.length - 1);
  const addr = generateError(address[randomAddressIndex], errorProbability);

  const randomPhoneIndex = getRandomInt(0, phone.length - 1);
  const ph = generateError(phone[randomPhoneIndex], errorProbability);

  const randomIdentifier = generateError(seed.toString(), errorProbability);

  return {
    identifier: randomIdentifier,
    firstname: firstName,
    lastname: lastName,
    address: addr,
    phone: ph,
  };
};
