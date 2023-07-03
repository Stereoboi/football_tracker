interface Player {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  age: number;
  birth: {
    date: string;
    place: string;
    country: string;
  };
  nationality: string;
  height: string;
  weight: string;
  injured: boolean;
  photo: string;
}

interface Team {
  id: number;
  name: string;
  logo: string;
}

interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
}

interface Games {
  appearences: number;
  lineups: number;
  minutes: number;
  number: number | null;
  position: string;
  rating: string;
  captain: boolean;
}

interface Substitutes {
  in: number;
  out: number;
  bench: number;
}

interface Shots {
  total: number;
  on: number;
}

interface Goals {
  total: number;
  conceded: number;
  assists: number;
  saves: number | null;
}

interface Passes {
  total: number;
  key: number;
  accuracy: number;
}

interface Tackles {
  total: number;
  blocks: number | null;
  interceptions: number;
}

interface Duels {
  total: number;
  won: number;
}

interface Dribbles {
  attempts: number;
  success: number;
  past: number | null;
}

interface Fouls {
  drawn: number;
  committed: number;
}

interface Cards {
  yellow: number;
  yellowred: number;
  red: number;
}

interface Penalty {
  won: number | null;
  commited: number | null;
  scored: number;
  missed: number;
  saved: number | null;
}

interface PlayerStatistics {
  team: Team;
  league: League;
  games: Games;
  substitutes: Substitutes;
  shots: Shots;
  goals: Goals;
  passes: Passes;
  tackles: Tackles;
  duels: Duels;
  dribbles: Dribbles;
  fouls: Fouls;
  cards: Cards;
  penalty: Penalty;
}

interface ScorersApiResponse {
  get: string;
  parameters: { season: string; league: string };
  errors: any[];
  results: number;
  paging: { current: number; total: number };
  response: { player: Player; statistics: PlayerStatistics[] }[];
}

export type { ScorersApiResponse };
