import { TagListProps } from './TagListProps';
import React from 'react';
import styles from './taglist.module.scss';

export const TagList = ({
  tag,
  tags,
  editMode,
  handlerOnTagRemove,
  handlerOnTagInputChange,
  handlerOnTagAdd,
}: TagListProps): JSX.Element => {
  const isHashTag = (tag: string) => {
    return tag.includes('#');
  };

  return (
    <>
      <div className={styles.tags}>
        <input
          type='text'
          placeholder='Add tags'
          value={tag}
          onChange={handlerOnTagInputChange}
          className={styles.tagsInput}
        />
        <button className={styles.tagsAddButton} onClick={handlerOnTagAdd}>
          ADD
        </button>
      </div>
      <div className={styles.tagsList}>
        {tags?.map((tag) => (
          <ul key={tag} className={editMode ? `${styles.tag} ${isHashTag(tag) && styles.tagActive}` : ''}>
            <li>
              {tag}{' '}
              <button className={styles.tagRemoveButton} onClick={() => handlerOnTagRemove(tag)}>
                x
              </button>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};
