import { Regions } from '../types';
import { generateData } from './generateData.ts';
import { getRandomNum } from './getRandomNum.ts';
import { generateError } from './generateError.ts';

export const generateRecord = (region: Regions, errorProbability: number, seed: number) => {
  const { identifier, firstname, lastname, address, phone } = generateData(region);

  const randomFirstNameIndex = getRandomNum(0, firstname.length - 1);
  const firstName = generateError(firstname[randomFirstNameIndex], errorProbability);

  const randomLastNameIndex = getRandomNum(0, lastname.length - 1);
  const lastName = generateError(lastname[randomLastNameIndex], errorProbability);

  const randomCityIndex = getRandomNum(0, address.length - 1);
  const city = generateError(address[randomCityIndex], errorProbability);

  const randomPhoneIndex = getRandomNum(0, phone.length - 1);
  const phones = generateError(phone[randomPhoneIndex], errorProbability);

  return {
    identifier,
    firstname: firstName,
    lastname: lastName,
    address: city,
    phone: phones,
  };
};
