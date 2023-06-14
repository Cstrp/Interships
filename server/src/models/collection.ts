import { model, Schema } from "mongoose";
import { Collections } from "../types";

const collectionSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    theme: { type: String, required: true },
    imageUrl: { type: String, required: false },
    userId: { type: Schema.Types.ObjectId, ref: "Users", required: true },
  },
  { versionKey: false, timestamps: true }
);

export default model<Collections>("Collection", collectionSchema);
