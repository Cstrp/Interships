import { model, Schema } from "mongoose";
import { User } from "../types";

const user = new Schema({
  name: { type: String, required: true },
});

export default model<User>("User", user);
