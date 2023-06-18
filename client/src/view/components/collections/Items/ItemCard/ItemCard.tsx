import { Item } from "../../../../../data/types/item.ts";
import { useState } from "react";
import { api } from "../../../../../data";
import { IconButton } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

export const ItemCard = ({ item }: { item: Item }) => {
  const [like, setLike] = useState<boolean>(
    item.likes.some(like => like.isLiked)
  );

  const handleLike = async (itemId: string, liked: boolean) => {
    try {
      if (liked) {
        setLike(false);
      } else {
        await api.post(`/items/${itemId}/like`);
        setLike(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {JSON.stringify(item)}{" "}
      <IconButton onClick={() => handleLike(item._id ? item._id : "", like)}>
        {like ? <Favorite /> : <FavoriteBorder />}
      </IconButton>
    </>
  );
};
