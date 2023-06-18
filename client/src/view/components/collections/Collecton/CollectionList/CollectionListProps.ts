import { Collection } from "../../../../../data";
import { Dispatch, SetStateAction } from "react";

export interface CollectionListProps {
  collections: Collection[];
  setCollection?: Dispatch<SetStateAction<Collection[]>>;
}
