import { Article } from "../types/ArticleType";

export default async function editPost(value: Article, id: string) {
  const { img, title, description, content, username } = value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/editpost/${id}`,
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
