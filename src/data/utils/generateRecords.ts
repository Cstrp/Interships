import { FakeData, Regions } from '../types';
import { generateRecord } from './generateRecord.ts';

export const generateRecords = (
  region: Regions,
  errorProbability: number,
  seed: number,
  page: number,
  pageSize: number,
): FakeData[] => {
  const userRecords: FakeData[] = [];

  const start = (page - 1) * pageSize;
  const end = page * pageSize;

  for (let i = start; i < end; i++) {
    const userRecord: FakeData = generateRecord(region, errorProbability, seed + i);
    userRecords.push(userRecord);
  }

  return userRecords;
};
