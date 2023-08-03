import { NoteStore } from '../types';

export const isNoteStore = (arg: any): arg is NoteStore => {
  return arg.notes !== undefined;
};
