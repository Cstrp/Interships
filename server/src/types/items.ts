export interface Items {
  id: number;
  name: string;
  tags: string[];
  collectionId: number;
  customFields?: Record<string, string | number | boolean | Date>;
}
