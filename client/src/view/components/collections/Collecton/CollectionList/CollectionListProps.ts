import { Collections } from "../../../../../data";
import { Dispatch, SetStateAction } from "react";

export interface CollectionListProps {
  collection: Collections[];
  setCollection?: Dispatch<SetStateAction<Collections[]>>;
}
