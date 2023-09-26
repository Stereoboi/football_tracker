import { QUERY_KEYS } from "../util/consts/app.keys.const";

export default async function getNewsById(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DEPLOY_URL}${QUERY_KEYS.GET_POSTS}${id}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return console.log("i fucked up");
  }

  return res.json();
}
