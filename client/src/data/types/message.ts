export interface Message {
  _id?: string;
  sender?: string;
  recipient: string;
  subject: string;
  body: string;
  createdAt?: Date;
}
