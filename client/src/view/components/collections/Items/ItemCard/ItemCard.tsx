import { Items } from "../../../../../data/types/items.ts";
import { useState } from "react";
import { api } from "../../../../../data";
import { IconButton } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

export const ItemCard = ({ item }: { item: Items }) => {
  const [like, setLike] = useState<boolean>(false);

  const handleLike = async (itemId: string, liked: boolean) => {
    try {
      if (liked) {
        await api.post(`/items/${itemId}/unlike`);
        setLike(false); // Лайк был забран, устанавливаем значение false
      } else {
        await api.post(`/items/${itemId}/like`);
        setLike(true); // Лайк был поставлен, устанавливаем значение true
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(item);

  return (
    <>
      {JSON.stringify(item)}{" "}
      <IconButton onClick={() => handleLike(item._id!, like)}>
        {like ? <Favorite /> : <FavoriteBorder />}
      </IconButton>
    </>
  );
};
