import React from "react";
import Modal from "@/app/components/modal";
import { Post } from "../../../../../types/PostsType";
import moment from "moment";

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

export default async function NewsModal({ params }: Params) {
  const post: Post = await getNewsById(params.id);

  return (
    <Modal>
      <div className="flex justify-center dark:text-white">
        <div className="flex flex-col max-h-screen w-full">
          <h1 className="text-lg font-bold mb-3 dark:text-white">
            {post.title}
          </h1>
          <img
            src={post.img}
            alt="img"
            className="mb-3 max-w-2xl max-h-[380px] mx-auto"
          />
          <p className="dark:text-gray-400">{post.content}</p>
          <div className="flex flex-col mt-3">
            <p>Author: {post.username}</p>
            <p>{moment(`${post.createdAt}`).format("YYYY-MM-DD HH:mm:ss")}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
}
