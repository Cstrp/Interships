import { model, Schema } from "mongoose";
import { Items } from "../types";

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
    likesCount: { type: Number, required: false, default: 0 },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model<Items>("Item", itemsSchema);
