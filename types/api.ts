import { id } from "./common";
export interface ApiError {
  message: string;
  code: string;
}
export interface CreateUserInput {
  name: string;
}

export interface CreateUserResponse {
  userId: id;
  name: string;
}
export interface SuccessResponse<T> {
  data: T;
  message?: string;
}
