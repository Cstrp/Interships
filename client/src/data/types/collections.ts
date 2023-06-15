export interface Collections {
  _id?: string;
  name: string;
  description: string;
  theme: string;
  imageUrl: string;
  fields: Fields[];
}

type Fields = { type: string; name: string };
