"use client";

// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";

import { UploadButton } from "@uploadthing/react";

import { OurFileRouter } from "../../api/uploadthing/core";
import { useState } from "react";
import Link from "next/link";

export default function UploadBtn({ state }: any) {
  const [images, setImages] = useState<
    {
      fileUrl: string;
      fileKey: string;
    }[]
  >([]);

  const imageList = (
    <>
      <ul>
        {images.map((image) => (
          <li key={image.fileUrl} className="mt-2">
            <Link href={image.fileUrl} target="_blank">
              {image.fileUrl}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
  return (
    // flex min-h-screen flex-col items-center justify-start p-24
    <main className="flex mt-3 mb-3">
      <UploadButton<OurFileRouter>
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          if (res) {
            setImages(res);

            state({ img: res[0].fileUrl });
            // const json = JSON.stringify(res);
            // Do something with the response
            // console.log(json);
          }
          // alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      {/* {imageList} */}
    </main>
  );
}
