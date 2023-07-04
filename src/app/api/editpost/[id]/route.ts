import Post from "@/models/Post";
import connect from "../../../../../util/mongoConnect";
import { NextResponse, NextRequest } from "next/server";

export const PUT = async (request: Request, { params }: { params: any }) => {
  const { id } = params;

  const { img, title, description, content, username } = await request.json();

  await connect();

  const updatePost = await Post.findOneAndUpdate(
    { _id: id },
    { $set: { img, title, description, content, username } },
    { new: true }
  );

  try {
    return new NextResponse(JSON.stringify(updatePost), {
      status: 201,
    });
  } catch (error: any) {
    return NextResponse.json("some wierd error", {
      status: 500,
    });
  }
};
