import { Article } from "../types/ArticleType";
import { QUERY_KEYS } from "../util/consts/app.keys.const";

export default async function addPostToDatabase(value: Article) {
  const { img, title, description, content, username } = value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DEPLOY_URL}${QUERY_KEYS.ADD_POST}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        img,
        title,
        description,
        content,
        username,
      }),
    }
  );
}
