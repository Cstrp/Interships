import { Like } from "./like";
import { Comment } from "./comment";

export interface Items {
  userId: string;
  collectionId: string;
  title: string;
  tags: string[];
  image?: string;
  fields: Record<string, string | number>;
  likes: Like[];
  comments: Comment[];
}
