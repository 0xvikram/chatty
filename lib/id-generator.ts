import { id } from "@/types/common";

export function generateId(): id {
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID();
  }

  const time = Date.now().toString(36);
  const rand = Math.random().toString(36).slice(2, 10);
  return `id-${time}-${rand}`;
}
