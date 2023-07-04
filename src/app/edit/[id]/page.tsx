import React from "react";
import getNewsById from "../../../../lib/getNewsFromDbById";

type Params = {
  params: {
    id: string;
  };
};
export default async function EditPage({ params: { id } }: Params) {
  const post = await getNewsById(id);

  return <div>EDITPAGEINAPP</div>;
}
