import { Items } from "../../../../../data/types/items.ts";

type ItemCardProps = { item: Items };

export const ItemCard = (item: ItemCardProps) => {
  return <>{JSON.stringify(item)}</>;
};
