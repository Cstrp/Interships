import { generateUserRecords, getRandomInt, lookupData } from './data';
import React, { useEffect, useState } from 'react';

import {
  Box,
  Button,
  CircularProgress,
  Container,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Slider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';

export const App = () => {
  const regions = Object.keys(lookupData);

  const [region, setRegion] = useState<string>(regions[0]);
  const [errorProbability, setErrorProbability] = useState(0);
  const [seed, setSeed] = useState(getRandomInt(1000, 9999));
  const [page, setPage] = useState(1);
  const [pageSize] = useState(70);
  const [userRecords, setUserRecords] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const generatedRecords = generateUserRecords(
      region,
      errorProbability / 10,
      seed,
      page,
      pageSize,
    );

    setUserRecords((prevRecords) => [...prevRecords, ...generatedRecords]);
  }, [errorProbability, page, pageSize, region, seed]);

  const handleRegionChange = (evt: SelectChangeEvent) => {
    setRegion(evt.target.value);
    setPage(1);
    setUserRecords([]);
    setHasMore(true);
  };

  const handleSliderChange = (event: Event, value: number | number[]) => {
    setErrorProbability(value as number);
    setPage(1);
    setUserRecords([]);
    setHasMore(true);
  };

  const handleSeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setSeed(value || 0);
    setPage(1);
    setUserRecords([]);
    setHasMore(true);
  };

  const handleRandomSeed = () => {
    const randomSeed = getRandomInt(1000, 9999);
    setSeed(randomSeed);
    setPage(1);
    setUserRecords([]);
    setHasMore(true);
  };

  const handleScroll = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <Container maxWidth={'xl'} sx={{ py: 5, display: 'flex', flexDirection: 'column', gap: 5 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <InputLabel>Select region:</InputLabel>
        <Select value={region} onChange={handleRegionChange}>
          {regions.map((value, index) => (
            <MenuItem key={index} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>

        <Box>
          <InputLabel>Error per record:</InputLabel>

          <Slider
            value={errorProbability}
            onChange={handleSliderChange}
            min={0}
            max={10}
            step={0.5}
            marks
            valueLabelDisplay={'auto'}
          />
          <TextField
            value={errorProbability}
            onChange={handleSliderChange}
            type={'number'}
            inputProps={{ min: 0, max: 10, step: 0.5 }}
          />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
          <Box>
            <InputLabel>Seed:</InputLabel>
            <TextField
              type={'number'}
              value={seed}
              onChange={handleSeedChange}
              inputProps={{
                min: 0,
                max: 9999,
                step: 1,
              }}
            />
          </Box>

          <Button variant={'contained'} onClick={handleRandomSeed}>
            Randomize
          </Button>
        </Box>
      </Box>

      <InfiniteScroll
        next={handleScroll}
        hasMore={hasMore}
        loader={<CircularProgress color={'error'} />}
        dataLength={userRecords.length}
        endMessage={<p>No more records</p>}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>id:</TableCell>
              <TableCell>identifier:</TableCell>
              <TableCell>firstname:</TableCell>
              <TableCell>lastname:</TableCell>
              <TableCell>address:</TableCell>
              <TableCell>phone:</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userRecords.map((record, idx) => (
              <TableRow key={idx}>
                <TableCell>{idx + 1}</TableCell>
                <TableCell>{record.identifier}</TableCell>
                <TableCell>{record.firstname}</TableCell>
                <TableCell>{record.lastname}</TableCell>
                <TableCell>{record.address}</TableCell>
                <TableCell>{record.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </InfiniteScroll>
    </Container>
  );
};
