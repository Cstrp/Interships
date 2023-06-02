import { Document } from "mongoose";

export interface Message extends Document {
  sender: string;
  recipient: string;
  subject: string;
  content: string;
  createdAt: Date;
}
