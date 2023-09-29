import React from "react";
import { PostResponse } from "../../../../types/newsDataType";
import Link from "next/link";
import { Post } from "../../../../types/PostsType";
import moment from "moment";
import Image from "next/image";

export default function NewsList({ data }: { data: Post[] }) {
  return (
    <div className="grid lg:grid-cols-2 lg:gap-6 xl:grid-cols-3 xl:gap-2  2xl:grid-cols-4 2xl:gap-2 mt-5 justify-center">
      {data.length === 0 ? (
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:text-white text-xl font-bold ">
          News page is empty ¯\_(ツ)_/¯
        </p>
      ) : (
        data.map((el) => {
          return (
            <div
              key={el._id}
              className="mb-5 lg:mb-0 flex flex-col max-w-sm min-w-min bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <Image
                className="rounded-t-lg h-44 w-full object-cover"
                src={el.img}
                alt=""
                width={400}
                height={400}
                priority
              />

              <div className="p-5 w-full ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white  text-ellipsis overflow-hidden line-clamp-3">
                  {el.title}
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-4">
                  {el.description}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Author: {el.username}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Written:{" "}
                  {moment(`${el.createdAt}`).format("YYYY-MM-DD HH:mm:ss")}
                </p>
              </div>
              <div className="flex mt-auto">
                <Link
                  href={`${process.env.NEXT_PUBLIC_DEPLOY_URL}/article/${el._id}`}
                  className=" mt-auto justify-center ml-5 mb-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                </Link>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
