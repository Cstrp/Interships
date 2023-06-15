import { Document } from "mongoose";

export interface Like extends Document {
  itemId: string;
  userId: string;
  likesCount: number;
}
