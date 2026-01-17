import { createdAt, id } from "./common";

export interface Chat {
  chatId: id;
  members: id[];
  createdAt: createdAt;
}
