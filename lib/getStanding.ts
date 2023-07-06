export default async function getStanding(leaguesId: string) {
  const res = await fetch(
    `https://v3.football.api-sports.io/standings?league=${leaguesId}&season=2022`,
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
