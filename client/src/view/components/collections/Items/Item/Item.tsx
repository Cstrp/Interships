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
        const res = await api.get("/items", { data: collectionId });

        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };

    fetchedItems();
  }, [collectionId]);

  return <NoData />;
};
