import { StateCreator } from 'zustand';
import { isNoteStore, NoteStore } from '..';

export const updateLocalStorage =
  <T extends NoteStore>(config: StateCreator<T, [], [['zustand/devtools', never]]>): StateCreator<T> =>
  (set, get, api) =>
    config(
      (nextState, ...args) => {
        if (isNoteStore(nextState)) {
          window.localStorage.setItem('notes', JSON.stringify(nextState.notes));
        }
        set(nextState, ...args);
      },
      get,
      api,
    );
