import { Schema } from "mongoose";

const fieldSchema = new Schema(
  {
    type: { type: String, required: true },
    name: { type: String, required: true },
  },
  { _id: false, timestamps: false }
);

export { fieldSchema };
