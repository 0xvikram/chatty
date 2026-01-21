import { CreateUserInput, CreateUserResponse } from "@/types/api";
import { generateId } from "@/lib/id-generator";
import { findUserById, saveUser } from "@/repositories/user.repositoriy";
import { User } from "@/types/user";
import { id } from "@/types/common";

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

export function getUserById(userId: id): User | undefined {
  return findUserById(userId);
}
