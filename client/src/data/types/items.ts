import { Fields } from "./fileds.ts";
import { Likes } from "./likes.ts";
import { Comments } from "./comments.ts";

export interface Items {
  _id?: string;
  title: string;
  tags: string[];
  image?: string;
  fields: Fields[];
  likes: Likes[];
  comments: Comments[];
}
