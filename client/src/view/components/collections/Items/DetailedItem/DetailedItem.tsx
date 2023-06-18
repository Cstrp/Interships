import { api, Item, itemsStore } from "../../../../../data";
import { useLocation } from "react-router-dom";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";

export const DetailedItem = observer(() => {
  const item = itemsStore.item;
  const likeLength = item.likes
    ? item.likes.filter(like => like.isLiked).length
    : 0;
  const isLiked = item.likes ? item.likes.some(like => like.isLiked) : false;
  const itemId = useLocation().pathname.split("/")[2];

  const id = item._id;

  const [like, setLike] = useState<boolean>(isLiked);
  const [likeCount, setLikeCount] = useState<number>(likeLength);

  useEffect(() => {
    const fetchItemById = async () => {
      try {
        const res = await api.get<Item>(`/item/${itemId}`);
        itemsStore.setItem(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchItemById();
  }, [itemId]);

  const handleLike = async (itemId: string, liked: boolean) => {
    try {
      await api.post(`/items/${itemId}/like`);
      setLike(!liked);
      setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(`${like}, ${id}, ${handleLike} ----> TRASH`, `${item}`);

  return <>{/*Implement details collection item*/}Hi</>;
});
