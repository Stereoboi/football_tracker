import Post from "../../../models/Post";
import connect from "../../../../util/mongoConnect";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (request: Request) => {
  const { img, title, description, content, username } = await request.json();

  await connect();

  const newPost = new Post({
    img,
    title,
    description,
    content,
    username,
  });

  try {
    await newPost.save();

    return NextResponse.json("Successfully created", {
      status: 201,
    });
  } catch (error: any) {
    return NextResponse.json("some wierd error", {
      status: 500,
    });
  }
};
