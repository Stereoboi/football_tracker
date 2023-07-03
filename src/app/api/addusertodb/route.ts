import { NextResponse, NextRequest } from "next/server";

import connect from "../../../../util/mongoConnect";
import Post from "@/models/Post";
import User from "@/models/User";

export const GET = async (request: Request) => {
  try {
    await connect();

    const posts = await Post.find();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request: Request) => {
  const { name, email } = await request.json();

  await connect();
  const userCheck = User.findOne({ email: email });
  const passVal = await userCheck;

  if (passVal === null) {
    const newUser = new User({
      name,
      email,
    });

    try {
      await newUser.save();

      return NextResponse.json("User has been created", {
        status: 201,
      });
    } catch (error: any) {
      return NextResponse.json("some wierd error", {
        status: 500,
      });
    }
  }
  return NextResponse.json("user alredy exist", {
    status: 200,
  });
};
