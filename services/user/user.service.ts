import { CreateUserInput, CreateUserResponse } from "@/types/api";
import { generateId } from "@/lib/id-generator";
import { saveUser } from "@/repositories/user.repositoriy";

// service file are for the buisness logic of api's
export function createUser(input: CreateUserInput): CreateUserResponse {
  const user = {
    userId: generateId(),
    name: input.name,
    createdAt: new Date(),
  };
  saveUser(user);
  return user;
}
