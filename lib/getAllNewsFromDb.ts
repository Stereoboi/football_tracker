import { QUERY_KEYS } from "../util/consts/app.keys.const";

export default async function getAllNewsFromDb() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DEPLOY_URL}${QUERY_KEYS.GET_ALL_POSTS}`,
    {
      method: "GET",
    }
  );

  if (!res.ok) return undefined;

  return res.json();
}
