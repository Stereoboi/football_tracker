type Params = {
  standingsId: string;
};

export default function NewsLayout({
  children,
  params: { standingsId },
}: {
  children: React.ReactNode;
  params: Params;
}) {
  return <main className="px-12  lg:px-48 ">{children}</main>;
}
