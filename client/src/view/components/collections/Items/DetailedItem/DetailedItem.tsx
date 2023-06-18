import {
  api,
  Comments,
  createComment,
  Item,
  itemsStore,
} from "../../../../../data";
import { useLocation } from "react-router-dom";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

export const DetailedItem = observer(() => {
  const [item, setItem] = useState<Item>(itemsStore.item);
  const itemId = useLocation().pathname.split("/")[2];

  const likeLength = item.likes
    ? item.likes.filter(like => like.isLiked).length
    : 0;
  const isLiked = item.likes ? item.likes.some(like => like.isLiked) : false;

  const [like, setLike] = useState<boolean>(isLiked);
  const [likeCount, setLikeCount] = useState<number>(likeLength);
  const [comment, setComment] = useState<string>("");

  const handleLike = async (itemId: string, liked: boolean) => {
    try {
      setLike(!liked);
      setLikeCount(liked ? likeCount - 1 : likeCount + 1);

      const updatedItem = {
        ...item,
        likes: item.likes?.map(like => ({ ...like, isLiked: !liked })),
      };

      setItem(updatedItem);

      await api.post(`/items/${itemId}/like`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
  };

  const handleAddComment = () => {
    const newComment: Comments = { itemId, content: comment };
    const updatedComments = [...item.comments, newComment];
    const updatedItem = { ...item, comments: updatedComments };

    createComment(newComment);
    setItem(updatedItem);
    setComment("");
  };

  useEffect(() => {
    const fetchItemById = async () => {
      try {
        const res = await api.get<Item>(`/item/${itemId}`);
        setItem(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchItemById();
  }, [itemId]);

  return (
    <Card
      elevation={10}
      sx={{
        width: "100%",
        minWidth: 1220,
        p: 5,
        backgroundColor: "transparent",
        height: 700,
        overflowY: "auto",
      }}
    >
      <div className={"flex flex-row w-full justify-around items-center"}>
        <CardMedia
          component={"img"}
          image={item.image}
          alt={item.title}
          className={"max-w-[200px]"}
        />
        <Typography variant={"h4"} color={"text"}>
          {item.title}
        </Typography>
      </div>
      <CardContent>
        <div className={"flex flex-row gap-5"}>
          Tags:
          {item.tags
            ? item.tags.map((tag, idx) => (
                <Chip key={idx} label={tag} variant="filled" />
              ))
            : "No tags"}
        </div>
      </CardContent>
      <CardActions>
        <div>
          <IconButton onClick={() => handleLike(itemId, like)}>
            {like ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
          <span className={"text-base font-semibold"}>{likeCount}</span>
        </div>
      </CardActions>
      <CardContent className={"flex flex-col gap-10"}>
        <div>
          Comments:
          {item.comments && item.comments.length > 0 ? (
            item.comments.map((comment, idx) => (
              <Typography key={idx}>{comment.content}</Typography>
            ))
          ) : (
            <Typography>No comments</Typography>
          )}
        </div>
        <div>
          <TextareaAutosize
            minRows={5}
            value={comment}
            onChange={handleCommentChange}
            className={"bg-transparent border p-2 rounded"}
            style={{ width: "100%" }}
          />
          <Button
            variant="outlined"
            color={"inherit"}
            sx={{ mt: 2 }}
            onClick={handleAddComment}
          >
            Add comment
          </Button>
        </div>
      </CardContent>
    </Card>
  );
});
