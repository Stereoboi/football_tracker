type Params = {
  standingsId: string;
};

export default function TopScorersLayout({
  children,
  params: { standingsId },
}: {
  children: React.ReactNode;
  params: Params;
}) {
  return <section className="">{children}</section>;
}
