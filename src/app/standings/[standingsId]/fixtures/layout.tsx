import RegularLap from "@/app/components/StandingsComponents/RegularLap";

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
  return <section>{children}</section>;
}
