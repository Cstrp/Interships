import { model, Schema } from "mongoose";

const playerModel = new Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
  },
  {
    versionKey: false,
  }
);

export default model("Player", playerModel);
