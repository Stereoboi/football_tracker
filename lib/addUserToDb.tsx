export default async function addUserToDatabase(name: any, email: any) {
  const res = await fetch(
    "https://football-tracker-steel.vercel.app/api/addusertodb",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }
  );
}
