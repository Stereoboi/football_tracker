"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Post } from "../../../../types/PostsType";

export default function Pagination({ pages }: { pages: Post[] }) {
  const params = useParams();
  const [newsNum, setNewsNum] = useState<number>();
  const [ready, setReady] = useState(false);
  const [arrows, setArrows] = useState<number>();

  useEffect(() => {
    if (params.id) {
      setArrows(Number(params.id));
    } else {
      setArrows(Number(0));
    }
  }, [params.id]);

  useEffect(() => {
    const totalPages = pages.length / 12;

    setNewsNum(Math.ceil(totalPages));
    setReady(true);
  }, [pages]);

  return ready && newsNum ? (
    <div className="flex justify-center mt-3 mb-3">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          {arrows === 1 || !params.id ? (
            <span
              className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled-link"
              aria-disabled="true"
            >
              <span className="sr-only">Previous</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          ) : (
            <Link
              href={`${process.env.NEXT_PUBLIC_DEPLOY_URL}/news/${arrows! - 1}`}
              className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          )}
        </li>
        {(() => {
          const items = [];
          for (let i = 0; i < newsNum; i++) {
            items.push(
              <li key={i}>
                <Link
                  href={`${process.env.NEXT_PUBLIC_DEPLOY_URL}/news/${i + 1}`}
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {i + 1}
                </Link>
              </li>
            );
          }
          return items;
        })()}
        <li>
          {arrows === Math.ceil(newsNum) ? (
            <span
              className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled-link"
              aria-disabled="true"
            >
              <span className="sr-only">Next</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          ) : (
            <Link
              href={`${process.env.NEXT_PUBLIC_DEPLOY_URL}/news/${arrows! + 1}`}
              className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          )}
        </li>
      </ul>
    </div>
  ) : (
    <></>
  );
}
