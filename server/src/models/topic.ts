import { model, Schema } from "mongoose";
import { Topic } from "../types";

const topicSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
});

export default model<Topic>("Topic", topicSchema);
