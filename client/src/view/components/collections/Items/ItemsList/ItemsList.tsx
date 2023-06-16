import { Items } from "../../../../../data/types/items.ts";
import { ItemCard } from "../ItemCard/ItemCard.tsx";

interface ItemsListProps {
  items: Items[];
}
export const ItemsList = ({ items }: ItemsListProps) => {
  return (
    <>
      {items?.map(item => (
        <div key={item._id}>
          <ItemCard item={item} />
        </div>
      ))}
    </>
  );
};
