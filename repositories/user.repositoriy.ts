//
import { User } from "@/types/user";
import { id } from "@/types/common";

const storeUser = new Map<string, User>();
export function saveUser(user: User): void {
  storeUser.set(user.userId, user);
}

export function findUserById(id: id): User | undefined {
  return storeUser.get(id);
}
export function getAllUsers(): User[] {
  return Array.from(storeUser.values());
}
