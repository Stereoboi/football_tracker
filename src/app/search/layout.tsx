import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search page",
  description: "Search page",
};

type Params = {
  standingsId: string;
};

export default function SearchLayout({
  children,
  params: { standingsId },
}: {
  children: React.ReactNode;
  params: Params;
}) {
  return <section className="px-12 lg:px-48">{children}</section>;
}
