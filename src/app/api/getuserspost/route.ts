import { NextResponse, NextRequest } from "next/server";
import connect from "../../../../util/mongoConnect";
import Post from "@/models/Post";

export const GET = async (request: NextRequest) => {
  const url = new URL(request.url);

  const username = url.searchParams.get("username");

  try {
    await connect();

    const posts = await Post.find({ username });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
