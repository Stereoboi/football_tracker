import React from "react";
import Modal from "@/app/components/modal";
import { Post } from "../../../../../types/PostsType";
import moment from "moment";
import Image from "next/image";

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
      <div className="flex justify-center dark:text-white max-h-[550px] 2xl:max-h-[650px] ">
        <div className="flex flex-col w-full">
          <h1 className="text-lg font-bold mb-3 dark:text-white text-center">
            {post.title}
          </h1>

          <Image
            src={post.img}
            alt="img"
            width={800}
            height={600}
            className="mb-3 h-full w-full xl:h-[360px] xl:w-[672px] xl:mx-auto object-cover"
          />

          <div>
            <p className="dark:text-gray-400 text-justify">{post.content}</p>
            <div className="flex justify-between align-middle my-3">
              <p>Author: {post.username}</p>
              <p>{moment(`${post.createdAt}`).format("LL")}</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
