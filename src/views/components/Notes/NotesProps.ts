export interface NotesProps {
  id: string;
  title: string;
  onEdited: (id: string, title: string) => void;
  onRemoved: (id: string) => void;
  addNoteTag: (id: string, tag: string) => void;
  updateNoteTag: (id: string, tags: string[]) => void;
  tags?: string[];
}
