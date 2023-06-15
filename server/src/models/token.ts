import { model, Schema } from "mongoose";
import { Token } from "../types";

const tokenSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, required: true },
  tokenId: { type: String, required: true },
  expire: { type: Number, required: true },
});

export default model<Token>("Token", tokenSchema);
