import { useEffect } from "react";
import { Item as I } from "../../../../../data/types/item.ts";
import { useLocation } from "react-router-dom";
import { api, itemsStore } from "../../../../../data";
import { ItemsTable } from "../ItemsTable/ItemsTable.tsx";
import { observer } from "mobx-react";
import { CreateItemBtn } from "../CreateItemBtn/CreateItemBtn.tsx";
import { NoData } from "../../../common";

export const Items = observer(() => {
  const location = useLocation();
  const collectionId = location.pathname.split("/")[2];

  const { items } = itemsStore;

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

    // const itemsTimer = setInterval(() => fetchedItems(), 8888);
  }, [collectionId]);

  return (
    <>
      {items.length > 0 ? (
        <>
          <ItemsTable items={items} />
          <CreateItemBtn />
        </>
      ) : (
        <>
          <NoData />
          <CreateItemBtn />
        </>
      )}
    </>
  );
});
