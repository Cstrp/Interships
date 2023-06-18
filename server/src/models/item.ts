import { model, Schema } from "mongoose";
import { Items } from "../types";
import { likesSchema } from "./likes";

const itemsSchema = new Schema(
  {
    collectionId: {
      type: Schema.Types.ObjectId,
      ref: "Collection",
      required: true,
    },
    title: { type: String, required: true },
    tags: { type: [String], required: true },
    image: { type: String },
    fields: { type: Schema.Types.Mixed, required: true },
    likes: [{ type: likesSchema, required: false }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model<Items>("Item", itemsSchema);
