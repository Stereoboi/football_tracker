"use client";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import addPostToDatabase from "../../../../lib/addPostToDb";
import UploadBtn from "../createPost/UploadButton";
import useSWR, { useSWRConfig } from "swr";
import { Article } from "../../../../types/ArticleType";
import InputComponent from "./InputComponent";
import TextField from "./TextFieldComponent";
import { postValidationSchema } from "../../../../util/validationSchema";

export default function CreateFormPost() {
  const [value, setValue] = useState<Article>({} as Article);
  const [image, setImage] = useState<string>();
  const [ready, setReady] = useState(false);
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
    validationSchema: postValidationSchema,
    onSubmit: (values) => {
      setValue({
        img: image || process.env.NEXT_PUBLIC_PLACEHOLDER_URL,
        title: values.title,
        description: values.description,
        content: values.content,
        username: session?.user?.name,
      });

      setReady(true);
      formik.resetForm();
    },
  });

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
      <TextField
        label="Content"
        id="content"
        name="content"
        onChange={formik.handleChange}
        value={formik.values.content}
        error={formik.touched.content && formik.errors.content}
      />
      <div>
        <UploadBtn state={setImage} />
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Submit
        </button>
      </div>
    </form>
  );
}
