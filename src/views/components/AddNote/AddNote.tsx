import React, { useCallback, useState } from 'react';
import styles from './index.module.scss';
import { AddNoteProps } from './AddNoteProps';

export const AddNote = ({ addNote }: AddNoteProps) => {
  const [inputValue, setInputValue] = useState('');

  const addNotes = useCallback(() => {
    addNote(inputValue);
    setInputValue('');
  }, [inputValue, addNote]);

  const onKeyDownHandler = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter') {
      addNotes();
    }
  };

  return (
    <>
      <div className={styles.input}>
        <input
          type='text'
          className={styles.inputTitle}
          value={inputValue}
          onChange={(evt) => {
            setInputValue(evt.target.value);
          }}
          placeholder='Type here...'
          onKeyDown={onKeyDownHandler}
        />
        <button onClick={addNotes} aria-label='Add' className={styles.inputButton} />
      </div>
    </>
  );
};
