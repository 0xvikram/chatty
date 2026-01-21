import { getUserById } from "@/services/user/user.service";

//er come from folder n
export async function GET({ params }: { params: { id: string } }) {
  //console.log(context);
  const user = getUserById(params.id);

  if (!user) {
    return new Response(
      JSON.stringify({
        error: { message: "User not found", code: "NOT_FOUND" },
      }),
      { status: 404, headers: { "Content-Type": "application/json" } },
    );
  }

  return new Response(JSON.stringify({ data: user }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
