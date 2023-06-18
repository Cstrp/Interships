import { Items } from "../../../../../data/types/items.ts";
import { ItemCard } from "../ItemCard/ItemCard.tsx";

interface ItemsListProps {
  items: Items[];
}
export const ItemsList = ({ items }: ItemsListProps) => {
  const item = items.map(item => item);

  return (
    <>
      {item?.map(i => (
        <div key={i._id}>
          <ItemCard item={i} />
        </div>
      ))}
    </>
  );
};
