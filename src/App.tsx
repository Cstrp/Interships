import * as React from 'react';
import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import { Divider, Table } from 'antd';
import { cols, FakeData, generateError, generateFakeRecords } from './data';
import { Csv, RandomDataForm } from './view/components';
import { Content } from 'antd/es/layout/layout';
import { CircularProgress } from '@mui/material';

export const App = () => {
  const [region, setRegion] = useState<string>('pl');
  const [errorProbability, setErrorProbability] = useState<number>(0);
  const [seed, setSeed] = useState<number>(0);
  const [fakeData, setFakeData] = useState<FakeData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    faker.setLocale(region);
    faker.seed(seed);

    const generateFakeData = generateFakeRecords(15, 0);
    setFakeData(generateFakeData);
  }, [region, seed]);

  const handleScroll = (evt: React.UIEvent<HTMLDivElement>) => {
    const botPoint =
      evt.currentTarget.scrollHeight - evt.currentTarget.scrollTop ===
      evt.currentTarget.clientHeight;

    if (botPoint && !isLoading) {
      setIsLoading(true);

      setTimeout(() => {
        const newFakeData = generateFakeRecords(10, fakeData.length);
        setFakeData((prevFakeData) => [...prevFakeData, ...newFakeData]);
        setIsLoading(false);
      }, 1000); // Simulating a delay for demonstration purposes
    }
  };

  const mutateData = (data: FakeData): FakeData => {
    const { identifier, firstname, lastname, address, phone } = data;

    return {
      ...data,
      identifier: generateError(identifier, errorProbability),
      firstname: generateError(firstname, errorProbability),
      lastname: generateError(lastname, errorProbability),
      address: generateError(address, errorProbability),
      phone: generateError(phone, errorProbability),
    };
  };

  const mutatedFakeData = fakeData.map(mutateData);

  const csvData = mutatedFakeData.map((data, idx) => ({
    id: idx + 1,
    identifier: data.identifier,
    firstname: data.firstname,
    lastname: data.lastname,
    address: data.address,
    phone: data.phone,
  }));

  return (
    <Content className={'p-20 mx-auto'}>
      <RandomDataForm
        region={region}
        setRegion={setRegion}
        errorProbability={errorProbability}
        setErrorProbability={setErrorProbability}
        seed={seed}
        setSeed={setSeed}
      />

      <Csv data={csvData} />

      <Divider />

      <div className={'overflow-auto'} style={{ height: '570px' }} onScroll={handleScroll}>
        <Table columns={cols} dataSource={mutatedFakeData} size="middle" pagination={false} />

        <div className={'flex flex-row justify-center py-2'}>
          {isLoading && <CircularProgress />}
        </div>
      </div>
    </Content>
  );
};
