import { model, Schema } from "mongoose";
import { Like } from "../types";

const likeSchema = new Schema(
  {
    itemId: { type: Schema.Types.ObjectId, ref: "Item", required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    likesCount: { type: Number, default: 0 },
  },
  { timestamps: true, versionKey: false }
);

export default model<Like>("Like", likeSchema);
