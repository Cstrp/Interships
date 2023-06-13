export interface CustomFields {
  [key: string]: FieldValue;
}

type FieldValue = number | string | boolean | Date;
