import { model, Schema } from "mongoose";
import { User } from "../types";

const userSchema = new Schema({
  userName: { type: String, required: true, unique: false },
});

export default model<User>("Users", userSchema);
