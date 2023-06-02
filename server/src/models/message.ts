import { model, Schema } from "mongoose";
import { Message } from "../types";

const messageSchema = new Schema(
  {
    sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
    recipient: { type: Schema.Types.ObjectId, ref: "User", required: true },
    subject: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: String, default: Date.now() },
  },
  { timestamps: true }
);

export default model<Message>("Message", messageSchema);
