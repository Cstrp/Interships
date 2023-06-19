import { useState } from "react";
import { Collection } from "..";

export const useCollection = () => {
  const [collection, setCollection] = useState<Collection[]>([]);

  return { collection, setCollection };
};
