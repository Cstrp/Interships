import { Button, Form, InputNumber, Select, Slider, Typography } from 'antd';
import { RandomDataFormProps } from './RandomDataFormProps.ts';
import { getRandNum, selectOptions } from '../../../data';

export const RandomDataForm = ({
  errorProbability,
  setErrorProbability,
  seed,
  setSeed,
  setRegion,
  region,
}: RandomDataFormProps) => {
  const randomSeed = () => {
    const randSd = getRandNum(0, 100000);
    setSeed(randSd.toString());
  };

  return (
    <Form className="max-w-xl">
      <Form.Item label={<Typography className={'text-blue-600'}>Region</Typography>}>
        <Select value={region} onChange={(value) => setRegion(value)} options={selectOptions} />
      </Form.Item>
      <Form.Item label={<span className={'text-red-700'}>Errors per record</span>}>
        <div className="flex">
          <Slider
            className="flex-auto"
            min={0}
            max={10}
            onChange={(value) => setErrorProbability(value)}
            value={errorProbability}
            step={0.5}
          />
          <InputNumber
            min={0}
            max={1000}
            step={0.01}
            value={errorProbability}
            onChange={(value) => setErrorProbability(value ? value : 0)}
          />
        </div>
      </Form.Item>
      <Form.Item label={<Typography className="text-green-900 font-extrabold">Seed</Typography>}>
        <div className="flex">
          <InputNumber
            className="flex-auto"
            value={seed}
            onChange={(value) => setSeed(value ? value : '')}
          />
          <Button onClick={randomSeed}>Random</Button>
        </div>
      </Form.Item>
    </Form>
  );
};
