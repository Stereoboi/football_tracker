import { QUERY_KEYS } from "../util/consts/app.keys.const";

export default async function addUserToDatabase(
  name: string | undefined | null,
  email: string | undefined | null
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DEPLOY_URL}${QUERY_KEYS.ADD_USER_TO_DB}`,
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
