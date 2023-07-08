export default async function getPlayers(teamId: string) {
  const res = await fetch(
    `https://v3.football.api-sports.io/players/squads?team=${teamId}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": `${process.env.NEXT_FOOTBALL_API_KEY}`,
      },
      next: { revalidate: 43200 },
    }
  );

  if (!res.ok) return undefined;

  return res.json();
}
