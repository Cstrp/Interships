import React, { useState } from 'react';
import styles from './index.module.scss';
import { useNoteStore } from '../../data';
import { AddNote, Notes } from '../components';
import { filterTags } from '../../data/utils/filterTags';

export const App: React.FC = () => {
  const { notes, createNote, updateNote, removeNote, updateNoteTags, addNoteTag } = useNoteStore();
  const [value, setValue] = useState('');

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>Notes app</h1>
      <section className={styles.articleSection}>
        <AddNote
          addNote={(title) => {
            if (title) {
              createNote(title);
            }
          }}
        />
        <input
          type='text'
          onChange={handleChange}
          className={`${styles.input} ${styles.inputValue}`}
          placeholder={'Filter with tag...'}
        />
      </section>
      <section className={styles.articleSection}>
        {!notes.length && <p className={styles.articleText}>Oops, you have not added any notes</p>}
        {notes.map((note) => (
          <Notes
            key={note.id}
            id={note.id}
            title={note.title}
            onEdited={updateNote}
            onRemoved={removeNote}
            addNoteTag={addNoteTag}
            updateNoteTag={updateNoteTags}
            tags={filterTags(note.tags!, value)}
          />
        ))}
      </section>
    </article>
  );
};
