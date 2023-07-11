interface SquadPlayer {
  id: number;
  name: string;
  age: number;
  number: number;
  position: string;
  photo: string;
}

interface SquadTeam {
  id: number;
  name: string;
  logo: string;
}

interface SquadResponse {
  team: SquadTeam;
  players: SquadPlayer[];
}

interface SquadAPIResponse {
  get: string;
  parameters: { team: string };
  errors: any[];
  results: number;
  paging: { current: number; total: number };
  response: SquadResponse[];
}

export type { SquadAPIResponse };
