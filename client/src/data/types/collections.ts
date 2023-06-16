import { Fields } from "./fileds.ts";
import { Items } from "./items.ts";

export interface Collections {
  _id?: string;
  name: string;
  description: string;
  theme: string;
  imageUrl: string | File;
  fields: Fields[];
  items?: Items[];
}
