export interface Message {
  _id?: string;
  sender: string;
  recipient: string;
  subject: string;
  content: string;
  createdAt?: string;
}
