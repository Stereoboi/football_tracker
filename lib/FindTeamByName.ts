import { API_QUERY_KEYS } from "../util/consts/app.keys.const";
export default async function findTeamByName(name: string) {
  // `${process.env.NEXT_FOOTBALL_API_URL}${API_QUERY_KEYS.TEAMS}?${API_QUERY_KEYS.SEARCH}=${name}`,

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_FOOTBALL_API_URL}${API_QUERY_KEYS.TEAMS}?${API_QUERY_KEYS.SEARCH}=${name}`,
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
