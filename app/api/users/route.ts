//This is the working of an route.ts file t shuld follow these  points
// 1. Receive request
// 2. Read request body
// 3. Validate input
// 4. Call service
// 5. Return response

import { createUser } from "@/services/user/user.service";
import { CreateUserInput } from "@/types/api";

export async function POST(request: Request) {
  const data: CreateUserInput = await request.json();
  if (!data.name) {
    return new Response(
      JSON.stringify({
        error: { message: "Name required", code: "BAD_REQUEST" },
      }),
      { status: 400 },
    );
  }
  const user = createUser({ name: data.name });

  return new Response(JSON.stringify({ data: user }), { status: 201 });
}
