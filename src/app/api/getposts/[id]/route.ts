import { NextResponse, NextRequest } from "next/server";
import connect from "../../../../../util/mongoConnect";
import Post from "@/models/Post";

export const GET = async (
  request: NextRequest,
  { params }: { params: any }
) => {
  const { id } = params;

  try {
    await connect();

    const posts = await Post.findById(id);

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request: Request, { params }: { params: any }) => {
  const { id } = params;

  try {
    await connect();

    const posts = await Post.findByIdAndDelete(id);

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
