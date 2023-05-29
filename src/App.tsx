import { useEffect, useState } from 'react';
import { FakeData } from './data/types';
import { generateRecords, getRandomNum } from './data/utils';
import { Location } from './data/types/location.ts';
import { Box, Slider } from '@mui/material';

export const App = () => {
  const [region, setRegion] = useState<Location>(Location.Russia);
  const [errorProbability, setErrorProbability] = useState(0);
  const [seed, setSeed] = useState<number>(getRandomNum(1000, 9999));
  const [page, setPage] = useState<number>(1);
  const [pageSize] = useState<number>(20);
  const [userRecords, setUserRecords] = useState<FakeData[]>([]);

  useEffect(() => {
    const generatedRecords = generateRecords(region, errorProbability, seed, page, pageSize);
    setUserRecords(generatedRecords);
  }, [region, seed, page, pageSize, errorProbability]);
  г;
  const handleChange = (event: Event, newValue: number | number[]) => {
    setErrorProbability(newValue as number);
  };

  return (
    <>
      <Slider
        value={errorProbability}
        onChange={handleChange}
        step={1}
        min={0}
        max={10}
        marks
        valueLabelDisplay='auto'
      />
      {userRecords.map((record, idx) => (
        <Box key={idx}>{JSON.stringify(record.firstname)}</Box>
      ))}
    </>
  );
};
