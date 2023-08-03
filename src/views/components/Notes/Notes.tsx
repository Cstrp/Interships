import React from 'react';
import styles from './index.module.scss';
import { NotesProps } from './NotesProps';
import { useNotes } from '../../../data/hooks/useHotes';
import { TagList } from '../TagList/TagList';

export const Notes = ({ id, title, onEdited, onRemoved, tags, addNoteTag, updateNoteTag }: NotesProps) => {
  const {
    isEditMode,
    note,
    tag,
    handlerOnNotes,
    handlerOnClick,
    handlerOnEdit,
    handlerOnTagAdd,
    handlerOnTagInputChange,
    handlerOnTagRemove,
  } = useNotes(id, title, onEdited, onRemoved, addNoteTag, updateNoteTag);

  return (
    <div className={styles.wrapper}>
      <div className={styles.input}>
        <label className={styles.inputLabel}>
          {isEditMode ? (
            <input value={note} onChange={handlerOnNotes} className={styles.inputEdit} />
          ) : (
            <h3 className={styles.inputTitle}>{title}</h3>
          )}
        </label>
        {isEditMode ? (
          <button className={styles.inputSave} onClick={handlerOnClick} />
        ) : (
          <>
            <button className={styles.inputEdit} onClick={handlerOnEdit} />
          </>
        )}

        <button
          className={styles.inputRemove}
          onClick={() => {
            if (confirm('Are you sure?')) {
              onRemoved(id);
            }
          }}
        />
      </div>
      <TagList
        tag={tag}
        tags={tags}
        editMode={isEditMode}
        handlerOnTagInputChange={handlerOnTagInputChange}
        handlerOnTagAdd={handlerOnTagAdd}
        handlerOnTagRemove={handlerOnTagRemove}
      />
    </div>
  );
};
