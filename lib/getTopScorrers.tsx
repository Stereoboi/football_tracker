// process.env.NEXT_FOOTBALL_API_KEY;

export default async function getTopScorers(leaguesId: string) {
  const res = await fetch(
    `https://v3.football.api-sports.io/players/topscorers?season=2022&league=${leaguesId}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": `${process.env.NEXT_FOOTBALL_API_KEY}`,
      },
      next: { revalidate: 0 },
    }
  );

  if (!res.ok) return undefined;

  return res.json();
}
