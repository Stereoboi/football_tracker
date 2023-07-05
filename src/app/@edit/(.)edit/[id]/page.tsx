import React from "react";
import Modal from "@/app/components/modal";
import getNewsById from "../../../../../lib/getNewsFromDbById";
import EditForm from "@/app/components/Dashboard/EditForm";

type Params = {
  params: {
    id: string;
  };
};

export default function EditPostPage({ params }: Params) {
  const { id } = params;

  return (
    <Modal>
      <EditForm id={id} />
    </Modal>
  );
}
