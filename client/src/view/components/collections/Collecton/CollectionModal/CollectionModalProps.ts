import { Collections } from "../../../../../data";

export interface CollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  collectionId?: string;
  collection?: Collections;
}
