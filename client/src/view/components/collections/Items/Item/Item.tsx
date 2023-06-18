import { NoData } from "../../../common";
import { useEffect } from "react";
import { Item as I } from "../../../../../data/types/item.ts";
import { useLocation } from "react-router-dom";
import { api, itemsStore } from "../../../../../data";
import { ItemsList } from "../ItemsList/ItemsList.tsx";
import { observer } from "mobx-react";

export const Item = observer(() => {
  const location = useLocation();
  const collectionId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchedItems = async () => {
      try {
        const res = await api.get<I[]>(`/items/${collectionId}`);

        itemsStore.setItems(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchedItems();
  }, [collectionId]);

  return (
    <>
      {itemsStore.items ? <ItemsList items={itemsStore.items} /> : <NoData />}
    </>
  );
});
