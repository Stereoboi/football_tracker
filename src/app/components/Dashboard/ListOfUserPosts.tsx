"use client";
import React from "react";
import moment from "moment";
import Loader from "../Loader/Loader";
import useSWR, { useSWRConfig } from "swr";
import { HiTrash, HiPencil } from "react-icons/hi2";
import Link from "next/link";
import deleteNewsById from "../../../../lib/deletePostById";
import { useSession } from "next-auth/react";

export default function ListOfUserPostss() {
  const { data: session, status } = useSession();

  const {
    data,
    mutate,
    error,
    isLoading,
  }: { data: any; mutate: any; error: any; isLoading: any } = useSWR(
    `${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/getuserspost?username=${session?.user?.name}`,

    { revalidateIfStale: true }
    // { refreshInterval: 1000 }
  );

  const handleDelete = async (id: string) => {
    try {
      await deleteNewsById(id);
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative overflow-auto-scroll max-h-screen scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 ">
      <p className="mt-2 text-gray-600 dark:text-white">Your Articles</p>
      {isLoading ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Loader />
        </div>
      ) : data.length === 0 ? (
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:text-white text-xl font-bold ">
          Dashboard is empty ¯\_(ツ)_/¯
        </p>
      ) : (
        data.map((post: any) => {
          return (
            <div key={post._id} className="mt-2 ">
              <div className="flex flex-col md:h-44 sm:h-80 items-center bg-white border hover:cursor-pointer border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img
                  src={post.img}
                  alt="img"
                  className="object-cover w-full sm:rounded-t-lg md:h-full md:w-3/5 md:rounded-l-lg md:rounded-tr-none"
                />

                <div className="flex flex-col flex-grow p-4 leading-normal max-w-[200px] md:w-2/5">
                  <h5 className="mb-2 font-bold tracking-tight text-gray-600 dark:text-white truncate ">
                    {post.title}
                  </h5>
                  <p className="mb-3 text-gray-700 dark:text-gray-400 overflow-hidden truncate">
                    {post.description}
                  </p>
                  <p className="mb-3 text-gray-700 dark:text-gray-400 truncate">
                    {moment(`${post.createdAt}`).format("LL")}
                  </p>
                  <div className="flex">
                    <button
                      data-id={post._id}
                      onClick={() => handleDelete(post._id)}
                      type="button"
                      title="Delete"
                      className="flex items-center focus:outline-none text-white font-medium rounded-lg mr-2"
                    >
                      <HiTrash className="h-5 w-5 fill-gray-600 hover:fill-red-500 dark:fill-white dark:hover:fill-red-500" />
                    </button>
                    <Link
                      href={`edit/${post._id}`}
                      title="Edit"
                      className="flex items-center focus:outline-none text-white font-medium rounded-lg"
                    >
                      <HiPencil className="h-5 w-5 fill-gray-600 hover:fill-light-green-700 dark:fill-white dark:hover:fill-light-green-700" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
