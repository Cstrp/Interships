import * as React from 'react';
import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import { Divider, Table } from 'antd';
import { cols, FakeData } from './data';
import { generateFakeRecords } from './data/utils/generateFakeRecords.ts';
import { Csv, RandomDataForm } from './view/components';
import { Content } from 'antd/es/layout/layout';

export const App = () => {
  const [region, setRegion] = useState<string>('pl');
  const [errorProbability, setErrorProbability] = useState<number>(0);
  const [seed, setSeed] = useState<number>(0);
  const [fakeData, setFakeData] = useState<FakeData[]>([]);

  useEffect(() => {
    faker.setLocale(region);
    faker.seed(seed);

    const generateFakeData = generateFakeRecords(20, 0, errorProbability);
    setFakeData(generateFakeData);
  }, [region, errorProbability, seed]);

  const handleScroll = (evt: React.UIEvent<HTMLDivElement>) => {
    const botPoint =
      evt.currentTarget.scrollHeight - evt.currentTarget.scrollTop ===
      evt.currentTarget.clientHeight;

    if (botPoint) {
      const newFakeData = generateFakeRecords(20, fakeData.length, errorProbability);
      setFakeData((prevFakeData) => [...prevFakeData, ...newFakeData]);
    }
  };

  const csvData = fakeData.map((data, idx) => ({
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
        <Table columns={cols} dataSource={fakeData} size="middle" pagination={false} />
      </div>
    </Content>
  );
};
