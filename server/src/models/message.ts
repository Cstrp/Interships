import { model, Schema } from "mongoose";
import { Message } from "../types";

const messageModel = new Schema(
  {
    sender: { type: String, required: true },
    recipient: { type: String, required: true },
    subject: { type: String, required: true },
    body: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() },
  },
  { timestamps: true, versionKey: false }
);

export default model<Message>("Messages", messageModel);
