import { CustomFields } from "./customFields";

export interface Item {
  id: number;
  title: string;
  tags: string[];
  customFields?: CustomFields;
}
