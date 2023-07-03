type Response = {
  fixture: {
    id: number;
    referee: string;
    timezone: string;
    date: string;
    timestamp: number;
    periods: { first: number; second: number };
    venue: {
      id: number;
      name: string;
      city: string;
    };
    status: { long: string; short: string; elapsed: number };
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    round: string;
  };
  teams: {
    home: {
      id: number;
      name: string;
      logo: string;
      winner: false;
    };
    away: {
      id: number;
      name: string;
      logo: string;
      winner: true;
    };
  };
  goals: { home: number; away: number };
  score: {
    halftime: { home: number; away: number };
    fulltime: { home: number; away: number };
    extratime: { home: null; away: null };
    penalty: { home: null; away: null };
  };
};

type Fixtures = {
  get: string;
  parameters: { league: string; season: string; round: string };
  errors: any[];
  results: number;
  paging: { current: number; total: number };
  response: Response[];
};

interface Fixture {
  id: number;
  referee: string;
  timezone: string;
  date: string;
  timestamp: number;
  periods: {
    first: number;
    second: number;
  };
  venue: {
    id: number;
    name: string;
    city: string;
  };
  status: {
    long: string;
    short: string;
    elapsed: number;
  };
}

interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
}

interface Team {
  id: number;
  name: string;
  logo: string;
  winner: boolean | null;
}

interface Score {
  halftime: {
    home: number;
    away: number;
  };
  fulltime: {
    home: number;
    away: number;
  };
  extratime: {
    home: number | null;
    away: number | null;
  };
  penalty: {
    home: number | null;
    away: number | null;
  };
}

type Match = {
  fixture: Fixture;
  league: League;
  teams: {
    home: Team;
    away: Team;
  };
  goals: {
    home: number;
    away: number;
  };
  score: Score;
};

export type { Fixtures, Response, Match };
