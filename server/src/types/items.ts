import { Comment } from "./comment";

export interface Items {
  userId: string;
  collectionId: string;
  title: string;
  tags: string[];
  image?: string;
  fields: Record<string, string | number>;
  likesCount: number;
  comments: Comment[];
}
