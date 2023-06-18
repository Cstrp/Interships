import { Schema } from "mongoose";

const likeSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    likesCount: { type: Number, default: 0 },
  },
  { timestamps: false, versionKey: false, _id: false }
);

export { likeSchema };
