import { NoData } from "../../../common";
import { useEffect, useState } from "react";
import { Items } from "../../../../../data/types/items.ts";
import { useLocation } from "react-router-dom";
import { api } from "../../../../../data";

export const Item = () => {
  const [items, setItems] = useState<Items[]>([]);
  const location = useLocation();
  const collectionId = location.pathname;

  useEffect(() => {
    const fetchedItems = async () => {
      try {
        const res = await api.get<Items[]>("/items", collectionId);

        setItems(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchedItems();
  }, [collectionId]);

  console.log(items);

  return <NoData />;
};
