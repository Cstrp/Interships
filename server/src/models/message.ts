import { model, Schema } from "mongoose";
import { Message } from "../types";

const message = new Schema(
  {
    sender: { type: String, required: true },
    recipient: { type: String, required: true },
    subject: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);

export default model<Message>("Message", message);
