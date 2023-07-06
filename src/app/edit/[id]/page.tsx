import React from "react";
import getNewsById from "../../../../lib/getNewsFromDbById";
import EditForm from "@/app/components/Dashboard/EditForm";
type Params = {
  params: {
    id: string;
  };
};
export default async function EditPage({ params: { id } }: Params) {
  const post = await getNewsById(id);

  return (
    <div>
      <EditForm id={id} />
    </div>
  );
}
