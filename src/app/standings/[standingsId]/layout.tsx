import StandingsNav from "@/app/components/StandingsComponents/StandingsNav";

type Params = {
  standingsId: string;
};

export default function StandingsLayout({
  children,
  params: { standingsId },
}: {
  children: React.ReactNode;
  params: Params;
}) {
  return (
    <section className="px-12 lg:px-48">
      <StandingsNav path={standingsId} />
      {children}
    </section>
  );
}
