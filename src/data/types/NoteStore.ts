import { Note } from '.';

export interface NoteStore {
  notes: Note[];
  createNote: (title: string) => void;
  updateNote: (id: string, title: string) => void;
  addNoteTag: (id: string, tag: string) => void;
  updateNoteTags: (id: string, tags: string[]) => void;
  removeNote: (id: string) => void;
}
