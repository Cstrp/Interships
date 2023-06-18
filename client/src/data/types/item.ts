import { Fields } from "./fileds.ts";
import { Comments } from "./comments.ts";

export interface Item {
  _id?: string;
  collectionId?: string;
  title: string;
  tags: string[];
  image?: string;
  fields: Fields[];
  likes: { userId?: string; itemId?: string; isLiked: boolean }[];
  comments: Comments[];
}
