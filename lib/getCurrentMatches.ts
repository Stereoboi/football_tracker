// process.env.NEXT_FOOTBALL_API_KEY;
import { API_QUERY_KEYS } from "../util/consts/app.keys.const";
export default async function getCurrentMatches(standingsId: string) {
  const res = await fetch(
    `${process.env.NEXT_FOOTBALL_API_URL}${API_QUERY_KEYS.FIXTURES}?${API_QUERY_KEYS.LEAGUE}=${standingsId}&${process.env.NEXT_FOOTBALL_API_SEASON}&last=10`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": `${process.env.NEXT_PUBLIC_FOOTBALL_API_KEY}`,
      },
      next: { revalidate: 600 },
    }
  );

  if (!res.ok) return undefined;

  return res.json();
}
