import React from "react";
import Modal from "@/app/components/modal";
import EditForm from "@/app/components/Dashboard/EditForm";
import { SWRProvider } from "@/app/swr-provider";

type Params = {
  params: {
    id: string;
  };
};

export default function EditPostPage({ params }: Params) {
  const { id } = params;

  return (
    <Modal>
      <SWRProvider>
        <EditForm id={id} />
      </SWRProvider>
    </Modal>
  );
}
