"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useSWR, { useSWRConfig } from "swr";
import UploadBtn from "../createPost/UploadButton";
import editPost from "../../../../lib/editPost";
import { Article } from "../../../../types/ArticleType";
import InputComponent from "./InputComponent";
import TextField from "./TextFieldComponent";
import Loader from "../Loader/Loader";
import { postValidationSchema } from "../../../../util/validationSchema";
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
  const [value, setValue] = useState<Article>({} as Article);
  const [image, setImage] = useState<string>();
  const [ready, setReady] = useState(false);

  const { data: session, status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/getuserspost?username=${session?.user?.name}`
  );

  const { data: onePostData, isLoading: isLoadingPost } = useSWR(
    `${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/getposts/${id}`
  );

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      content: "",
    },
    validationSchema: postValidationSchema,
    onSubmit: (values) => {
      setValue({
        img: image || process.env.NEXT_PUBLIC_PLACEHOLDER_URL,
        title: values.title,
        description: values.description,
        content: values.content,
        username: session?.user?.name,
      });
      router.back();
      setReady(true);
      formik.resetForm();
    },
  });

  useEffect(() => {
    if (onePostData) {
      formik.setValues({
        title: onePostData.title,
        description: onePostData.description,
        content: onePostData.content,
      });
    }
  }, [onePostData]);

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
      {isLoadingPost ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Loader />
        </div>
      ) : (
        <form onSubmit={formik.handleSubmit} className="mt-2 ">
          <InputComponent
            label="Title"
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
            error={formik.touched.title && formik.errors.title}
          />

          <InputComponent
            label="Description"
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description}
            error={formik.touched.description && formik.errors.description}
          />
          <label
            htmlFor="content"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
          >
            Your message
          </label>
          <TextField
            label="Content"
            id="content"
            name="content"
            onChange={formik.handleChange}
            value={formik.values.content}
            error={formik.touched.description && formik.errors.description}
          />
          <div>
            <UploadBtn state={setImage} />
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
