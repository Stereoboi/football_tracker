export default async function addUserToDatabase(
  name: string | undefined | null,
  email: string | undefined | null
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/addusertodb`,
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
