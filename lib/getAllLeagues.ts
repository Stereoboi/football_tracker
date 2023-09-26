// process.env.NEXT_FOOTBALL_API_KEY;
import { QUERY_KEYS } from "../util/consts/app.keys.const";
export default async function getAllLeagues() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DEPLOY_URL}${QUERY_KEYS.LEAGUES_ID}`
  );
  if (!res.ok) return undefined;
  return res.json();
}
