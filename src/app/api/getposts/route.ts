import { NextResponse, NextRequest } from "next/server";
import connect from "../../../../util/mongoConnect";
import Post from "@/models/Post";

export const GET = async (request: Request) => {
  const url = new URL(request.url);

  let step = url.searchParams.get("step");
  let lim = 12;
  if (!step) {
    step = "1";
    lim = 0;
  }
  const skip = (Number(step) - 1) * lim;

  try {
    await connect();

    const posts = await Post.find().limit(lim).skip(skip);

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
