import React from "react";
import moment from "moment";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post page",
  description: "Post page",
};

type Params = {
  params: {
    id: string;
  };
};

async function getNewsById(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/getposts/${id}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return undefined;
  }

  return res.json();
}

export default async function PostPage({ params: { id } }: Params) {
  const post = await getNewsById(id);

  return (
    <div>
      <div className="flex justify-center items-center dark:text-white h-screen">
        <div className="flex flex-col max-h-screen w-full max-w-2xl mx-auto">
          <h1 className="text-lg font-bold mb-3 dark:text-white">
            {post.title}
          </h1>
          <img
            src={post.img}
            alt="img"
            className="mb-3 max-w-2xl max-h-[380px]"
          />
          <p className="dark:text-gray-400">{post.content}</p>
          <div className="flex flex-col mt-3">
            <p>Author: {post.username}</p>
            <p>{moment(`${post.createdAt}`).format("YYYY-MM-DD HH:mm:ss")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
