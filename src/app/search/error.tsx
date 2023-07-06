"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  const handleClick = () => {
    router.back();
  };

  return (
    <div>
      <h2 className="dark:text-white text-gray-800 text-center">
        {error.message}
      </h2>
      <button onClick={handleClick}>Try again</button>
    </div>
  );
}
