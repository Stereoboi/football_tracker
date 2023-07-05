"use client";
import { SWRConfig } from "swr";
export const SWRProvider = ({ children }: any) => {
  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json());
  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
};
