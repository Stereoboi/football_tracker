import React from "react";
import moment from "moment";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Article page",
  description: "Article page",
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
    <div className="p-4">
      <div className="flex justify-center items-center dark:text-white">
        <div className="flex flex-col w-full max-w-2xl mx-auto">
          <h1 className="text-lg font-bold mb-3 dark:text-white">
            {post.title}
          </h1>
          <Image
            src={post.img}
            alt="img"
            width={800}
            height={600}
            className="mb-3 h-full w-full xl:h-[360px] xl:w-[672px] xl:mx-auto object-cover"
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
