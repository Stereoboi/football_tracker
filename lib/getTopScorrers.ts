// process.env.NEXT_FOOTBALL_API_KEY;
import { API_QUERY_KEYS } from "../util/consts/app.keys.const";

export default async function getTopScorers(leaguesId: string) {
  const res = await fetch(
    `${process.env.NEXT_FOOTBALL_API_URL}${API_QUERY_KEYS.PLAYERS}/${API_QUERY_KEYS.TOP_SCORERS}?${process.env.NEXT_FOOTBALL_API_SEASON}&${API_QUERY_KEYS.LEAGUE}=${leaguesId}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": `${process.env.NEXT_PUBLIC_FOOTBALL_API_KEY}`,
      },
      next: { revalidate: 86400 },
    }
  );

  if (!res.ok) return undefined;

  return res.json();
}
