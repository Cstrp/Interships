import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { NoteStore } from '..';
import { getCurrentState, randomId, updateLocalStorage } from '../utils';

export const useNoteStore = create<NoteStore>(
  updateLocalStorage(
    devtools((set, get) => ({
      notes: getCurrentState(),
      createNote: (title) => {
        const { notes } = get();
        const newNote = {
          id: randomId(),
          title,
          createdAt: Date.now(),
        };
        set({
          notes: [newNote].concat(notes),
        });
      },
      updateNote: (id: string, title: string) => {
        const { notes } = get();
        set({
          notes: notes.map((task) => ({
            ...task,
            title: task.id === id ? title : task.title,
          })),
        });
      },
      addNoteTag: (id: string, tag: string) => {
        const { notes } = get();
        set({
          notes: notes.map((note) => {
            if (note.id === id) {
              return {
                ...note,
                tags: note.tags ? [...note.tags, tag] : [tag],
              };
            }
            return note;
          }),
        });
      },
      updateNoteTags: (id: string, tags: string[]) => {
        const { notes } = get();
        set({
          notes: notes.map((note) => {
            if (note.id === id) {
              return {
                ...note,
                tags,
              };
            }
            return note;
          }),
        });
      },
      removeNote: (id: string) => {
        const { notes } = get();
        set({
          notes: notes.filter((task) => task.id !== id),
        });
      },
    })),
  ),
);
