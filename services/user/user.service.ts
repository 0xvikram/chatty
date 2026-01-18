import { CreateUserInput, CreateUserResponse } from "@/types/api";
import { generateId } from "@/lib/id-generator";

// service file are for the buisness logic of api's
export function createUser(input: CreateUserInput): CreateUserResponse {
  const user = {
    id: generateId(),
    name: input.name,
  };
  return user;
}
