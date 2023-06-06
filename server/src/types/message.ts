export interface Message {
  sender: string;
  recipient: string;
  subject: string;
  body: string;
  createdAt?: Date;
}
