import { Dispatch, SetStateAction } from 'react';

export interface RandomDataFormProps {
  region: string;
  setRegion: Dispatch<SetStateAction<string>>;
  errorProbability: number;
  setErrorProbability: Dispatch<SetStateAction<number>>;
  seed: number;
  setSeed: Dispatch<SetStateAction<number>>;
}
