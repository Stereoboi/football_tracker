import { QUERY_KEYS } from "../util/consts/app.keys.const";
import { Article } from "../types/ArticleType";

export default async function editPost(value: Article, id: string) {
  const { img, title, description, content, username } = value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DEPLOY_URL}${QUERY_KEYS.EDIT_POST}${id}`,
    {
      method: "PUT",
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
