import { createdAt, id } from "./common";
export interface User {
  userId: id;
  name: string;

  createdAt: createdAt;
}
