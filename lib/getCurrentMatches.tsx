// process.env.NEXT_FOOTBALL_API_KEY;

export default async function getCurrentMatches(standingsId: string) {
  const res = await fetch(
    `https://v3.football.api-sports.io/fixtures?league=${standingsId}&season=2022&last=10`,
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
