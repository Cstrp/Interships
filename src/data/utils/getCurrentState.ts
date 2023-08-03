import { Note } from '../types';

export const getCurrentState = () => {
  try {
    return JSON.parse(window.localStorage.getItem('notes') || '[]') satisfies Note[];
  } catch (err) {
    window.localStorage.setItem('notes', '[]');
  }
  return [];
};
