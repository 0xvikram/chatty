import { createdAt, id } from "./common";

export interface Message {
  messageId: id;
  createdAt: createdAt;
  receiverId: id;
  senderId: id;
  content: string;
  chatId: id;
}
