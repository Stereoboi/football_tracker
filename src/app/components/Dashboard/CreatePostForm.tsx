"use client";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import addPostToDatabase from "../../../../lib/addPostToDb";
import UploadBtn from "../createPost/UploadButton";
import useSWR, { useSWRConfig } from "swr";
import { Article } from "../../../../types/ArticleType";

export default function CreateFormPost() {
  const [value, setValue] = useState<Article>({} as Article);
  const [image, setImage] = useState<string>();
  const [ready, setReady] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const { data: session, status } = useSession();

  const { data, mutate } = useSWR(
    `${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/getuserspost?username=${session?.user?.name}`
  );

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      content: "",
    },
    onSubmit: (values) => {
      setValue({
        img: image,
        title: values.title,
        description: values.description,
        content: values.content,
        username: session?.user?.name,
      });

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
          await addPostToDatabase(value);
          mutate();
        } catch (error) {
          console.log(error);
        }
      };
      addPost();

      setReady(false);
    }
  }, [ready, value]);

  return (
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
        <UploadBtn state={setImage} />
        <button
          disabled={disabled}
          // type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
