import * as mongoose from "mongoose";
import { Message } from "../types";

const { Schema, model } = mongoose;

const chatSchema = new Schema(
  {
    sender: { type: String, required: true },
    recipient: { type: String, required: true },
    subject: { type: String, required: true },
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { versionKey: false, timestamps: true }
);

export default model<Message>("chat", chatSchema);
