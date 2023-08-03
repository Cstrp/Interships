import React, { useState } from 'react';

export const useNotes = (
  id: string,
  title: string,
  onEdited: (id: string, title: string) => void,
  onRemoved: (id: string) => void,
  addNoteTag: (id: string, tag: string) => void,
  updateNoteTag: (id: string, tags: string[]) => void,
  tags?: string[],
) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [note, setNote] = useState<string>(title);
  const [tag, setTag] = useState<string>('');

  const handlerOnEdit = () => {
    setIsEditMode(!isEditMode);
  };
  const handlerOnNotes = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setNote(evt.target.value);
  };
  const handlerOnClick = () => {
    onEdited(id, note);
    setIsEditMode(false);
  };

  const handlerOnTagAdd = () => {
    if (tag.trim()) {
      addNoteTag(id, tag.trim());
      setTag('');
    }
  };

  const handlerOnTagInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTag(evt.target.value);
  };

  const handlerOnTagRemove = (tagToRemove: string) => {
    const updatedTags = tags?.filter((tag) => tag !== tagToRemove) || [];
    updateNoteTag(id, updatedTags);
  };

  return {
    isEditMode,
    note,
    tag,
    handlerOnNotes,
    handlerOnClick,
    handlerOnEdit,
    handlerOnTagInputChange,
    handlerOnTagRemove,
    handlerOnTagAdd,
  };
};
