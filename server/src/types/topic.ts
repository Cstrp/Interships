import { Document } from "mongoose";
import { User } from "./user";

export interface Topic extends Document {
  user: User;
  name: string;
}
