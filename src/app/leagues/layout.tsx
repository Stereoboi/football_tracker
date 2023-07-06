type Params = {
  standingsId: string;
};

export default function LeaguesLayout({
  children,
  params: { standingsId },
}: {
  children: React.ReactNode;
  params: Params;
}) {
  return <section className="px-12 lg:px-48">{children}</section>;
}
