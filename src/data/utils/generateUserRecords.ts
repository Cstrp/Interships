import { generateUserRecord } from './generateUserRecord.ts';

export const generateUserRecords = (
  region: string,
  errorProbability: number,
  seed: number,
  page: number,
  pageSize: number,
) => {
  const userRecords = [];
  const start = (page - 1) * pageSize;
  const end = page * pageSize;

  for (let i = start; i < end; i++) {
    const userRecord = generateUserRecord(region, errorProbability, seed + i);
    userRecords.push(userRecord);
  }

  return userRecords;
};
