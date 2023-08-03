import { RandomId } from '../types/RandomId';

export const randomId: RandomId = () => Math.random().toString(16).slice(2) + new Date().getTime().toString(36);
