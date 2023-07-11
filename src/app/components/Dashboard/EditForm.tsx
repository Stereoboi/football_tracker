"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import UploadBtn from "../createPost/UploadButton";
import getNewsById from "../../../../lib/getNewsFromDbById";
import editPost from "../../../../lib/editPost";
import useSWR, { useSWRConfig } from "swr";

type Post = {
  _id: string;
  img: string;
  title: string;
  description: string;
  content: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export default function EditForm({ id }: { id: string }) {
  const router = useRouter();
  const [value, setValue] = useState({});
  const [ready, setReady] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const { data: session, status } = useSession();
  const [initialValue, setInitialValue] = useState<Post>();

  const { data, mutate } = useSWR(
    `${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/getuserspost?username=${session?.user?.name}`
  );
  useEffect(() => {
    const getNews = async () => {
      const result = await getNewsById(id);

      setInitialValue(result);
    };
    getNews();
  }, [id]);

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
      router.back();
      // mutate(
      //   `${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/getuserspost?username=${session?.user?.name}`
      // );
      setReady(true);
      formik.resetForm();
    },
  });

  useEffect(() => {
    const formIsEmpty = Object.values(formik.values).some((value) => !value);
    setDisabled(formIsEmpty);
  }, [formik.values]);

  useEffect(() => {
    if (ready) {
      const editUserPost = async () => {
        try {
          const result = await editPost(value, id);
          mutate();
        } catch (error) {
          console.log(error);
        }
      };
      editUserPost();

      setReady(false);
    }
  }, [ready, router, value]);

  return (
    <div className="flex flex-col justify-center h-fit ">
      <form onSubmit={formik.handleSubmit} className="mt-2 ">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
        >
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          // value={formik.values.title}
          defaultValue={initialValue?.title}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
        >
          Description
        </label>
        <input
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          defaultValue={initialValue?.description}
          // value={formik.values.description}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <label
          htmlFor="content"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
        >
          Your message
        </label>
        <textarea
          id="content"
          name="content"
          onChange={formik.handleChange}
          // value={formik.values.content}
          defaultValue={initialValue?.content}
          rows={12}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
        <div>
          <UploadBtn state={setValue} />
          <button
            // disabled={disabled}
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
