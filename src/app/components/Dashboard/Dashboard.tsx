"use client";
import React from "react";
import UploadBtn from "../createPost/UploadButton";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import addPostToDatabase from "../../../../lib/addPostToDb";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { Post } from "../../../../types/PostsType";
import deleteNewsById from "../../../../lib/deletePostById";
import { HiTrash, HiPencil } from "react-icons/hi2";
import moment from "moment";
import Link from "next/link";
import Loader from "../Loader/Loader";

export default function Dashboard() {
  const router = useRouter();
  const [value, setValue] = useState({});
  const [ready, setReady] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const { data: session, status } = useSession();

  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json());

  // console.log(process.env.NEXT_PUBLIC_DEPLOY_URL);

  const {
    data,
    mutate,
    error,
    isLoading,
  }: { data: Post[]; mutate: any; error: any; isLoading: any } = useSWR(
    `${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/getuserspost?username=${session?.user?.name}`,
    fetcher
  );
  console.log(data);
  console.log(session?.user?.name);

  //  цей useEffect використовується для оновлення (мутації) даних при переході на сторінку та оновлення вмісту списку постів
  useEffect(() => {
    mutate();
  }, []);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      content: "",
    },
    onSubmit: (values) => {
      setValue((prevValue) => ({
        ...prevValue,
        title: values.title,
        description: values.description,
        content: values.content,
        username: session?.user?.name,
      }));
      mutate();
      setReady(true);
      formik.resetForm();
    },
  });

  // useEffect для запобігання відправлення форми із пустими інпутами
  useEffect(() => {
    const formIsEmpty = Object.values(formik.values).some((value) => !value);
    setDisabled(formIsEmpty);
  }, [formik.values]);

  useEffect(() => {
    if (ready) {
      const addPost = async () => {
        try {
          const result = await addPostToDatabase(value);
          mutate();
        } catch (error) {
          console.log(error);
        }
      };
      addPost();

      setReady(false);
    }
  }, [ready, router, value]);

  const handleDelete = async (id: string) => {
    try {
      await deleteNewsById(id);
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-8">
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
          data.map((post) => {
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
                      {moment(`${post.createdAt}`).format(
                        "YYYY-MM-DD HH:mm:ss"
                      )}
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

      <form onSubmit={formik.handleSubmit} className="mt-3 ">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-600 dark:text-white "
        >
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-600 dark:text-white mt-3"
        >
          Description
        </label>
        <input
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <label
          htmlFor="content"
          className="block mb-2 text-sm font-medium text-gray-600 dark:text-white mt-3"
        >
          Your post
        </label>
        <textarea
          id="content"
          name="content"
          onChange={formik.handleChange}
          value={formik.values.content}
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
        <div>
          <UploadBtn state={setValue} />
          <button
            disabled={disabled}
            // type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
