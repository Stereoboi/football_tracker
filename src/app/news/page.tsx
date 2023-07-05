import React from "react";
import Pagination from "../components/Pagination/Pagination";
import { Post } from "../../../types/PostsType";
import NewsList from "../components/News/NewsList";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News page",
  description: "News page",
};

async function getNumberOfPages() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/getposts`,
    {
      method: "GET",
      next: { revalidate: 0 },
    }
  );

  if (!res.ok) return undefined;

  return res.json();
}

async function getNews(id: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/getposts?step=${id}`,
    {
      method: "GET",
      next: { revalidate: 0 },
    }
  );

  if (!res.ok) {
    console.log("error from fetch", res.status);
  }

  return res.json();
}

export default async function NewsPage() {
  const steps = await getNumberOfPages();

  const result: Post[] = await getNews(1);

  return (
    <>
      <NewsList data={result} />

      <Pagination pages={steps} />
    </>
  );
}
