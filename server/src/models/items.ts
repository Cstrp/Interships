import { model, Schema } from "mongoose";
import { Items } from "../types";

const additionalFields = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  value: { type: Schema.Types.Mixed },
});

const itemsSchema = new Schema(
  {
    name: { type: String, required: true },
    tags: [{ type: String }],
    collectionId: { type: Schema.Types.ObjectId, ref: "", required: true },
    additionalFields: [additionalFields],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model<Items>("Item", itemsSchema);
