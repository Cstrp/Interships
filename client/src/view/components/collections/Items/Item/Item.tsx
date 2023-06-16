import { NoData } from "../../../common";
import { useEffect, useState } from "react";
import { Items } from "../../../../../data/types/items.ts";
import { useLocation } from "react-router-dom";
import { api } from "../../../../../data";
import { ItemsList } from "../ItemsList/ItemsList.tsx";

export const Item = () => {
  const [items, setItems] = useState<Items[]>([]);
  const location = useLocation();
  const collectionId = location.pathname.split("/")[2];

  console.log(collectionId);
  useEffect(() => {
    const fetchedItems = async () => {
      try {
        const res = await api.get<Items[]>(`/items/${collectionId}`);

        setItems(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchedItems();
  }, [collectionId]);

  console.log(items);

  return <>{items ? <ItemsList items={items} /> : <NoData />}</>;
};
