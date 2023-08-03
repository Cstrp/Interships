import React from 'react';

export interface TagListProps {
  tag: string;
  tags?: string[];
  editMode: boolean;
  handlerOnTagInputChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  handlerOnTagAdd: () => void;
  handlerOnTagRemove: (tagToRemove: string) => void;
}
