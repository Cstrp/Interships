import { useEffect, useState } from "react";
import { Comments, Item } from "../types";
import { api, createComment } from "../api";

export const useDetailedItem = (itemId: string) => {
  const [item, setItem] = useState<Item>({} as Item);
  const [comment, setComment] = useState<string>("");
  const [like, setLike] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(0);

  useEffect(() => {
    const fetchItemById = async () => {
      try {
        const res = await api.get<Item>(`/item/${itemId}`);
        setItem(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    const fetchComments = async () => {
      try {
        const res = await api.get<Comments[]>(`/comments/${itemId}`);
        setItem(prevItem => ({ ...prevItem, comments: res.data }));
      } catch (e) {
        console.log(e);
      }
    };

    fetchComments();
    fetchItemById();
  }, [itemId]);

  useEffect(() => {
    if (item.likes) {
      const likeLength = item.likes
        ? item.likes.filter(like => like.isLiked).length
        : 0;
      const isLiked = item.likes
        ? item.likes.some(like => like.isLiked)
        : false;

      setLike(isLiked);
      setLikeCount(likeLength);
    }
  }, [item.likes]);

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
  };

  const handleAddComment = async () => {
    if (!comment) return;

    const newComment: Comments = { itemId, content: comment };
    const updatedComments = [...item.comments, newComment];
    const updatedItem = { ...item, comments: updatedComments };

    setItem(updatedItem);
    setComment("");
    await createComment(newComment);
  };

  const handleLike = async (itemId: string, liked: boolean) => {
    try {
      setLike(!liked);
      setLikeCount(prevCount => (liked ? prevCount - 1 : prevCount + 1));

      const updatedItem = {
        ...item,
        likes: item?.likes?.map(like => ({ ...like, isLiked: !liked })),
      };

      setItem(updatedItem);

      await api.post(`/items/${itemId}/like`);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    item,
    comment,
    like,
    likeCount,
    handleAddComment,
    handleCommentChange,
    handleLike,
  };
};
