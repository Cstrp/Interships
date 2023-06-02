import { model, Schema } from "mongoose";
import { User } from "../types";

const userSchema = new Schema({
  name: { type: String, required: true, unique: true },
});

export default model<User>("User", userSchema);
