import React from "react";
import Pagination from "../../components/Pagination/Pagination";
import { Post } from "../../../../types/PostsType";
import getAllNewsFromDb from "../../../../lib/getAllNewsFromDb";
import NewsList from "@/app/components/News/NewsList";
import { Suspense } from "react";

type Params = {
  params: {
    id: string;
  };
};

// export async function generateStaticParams() {
//   const result: Post[] = await getAllNewsFromDb();
//   console.log(result);
//   return result.map((el) => ({
//     id: el._id.toString(),
//   }));
// }

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

async function getNews(id: string) {
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

export default async function NewsPage({ params: { id } }: Params) {
  const steps = await getNumberOfPages();
  const result: Post[] = await getNews(id);

  return (
    <>
      <Suspense fallback={"LOADING WITH SUSPENSE"}>
        <NewsList data={result} />
      </Suspense>
      <Pagination pages={steps} />
    </>
  );
}
