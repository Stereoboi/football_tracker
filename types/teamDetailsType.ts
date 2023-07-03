import { type } from "os";

type ApiResponse = {
  get: string;
  parameters: {
    season: string;
    team: string;
    league: string;
  };
  errors: any[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: {
    league: {
      id: number;
      name: string;
      country: string;
      logo: string;
      flag: string;
      season: number;
    };
    team: {
      id: number;
      name: string;
      logo: string;
    };
    form: string;
    fixtures: {
      played: {
        home: number;
        away: number;
        total: number;
      };
      wins: {
        home: number;
        away: number;
        total: number;
      };
      draws: {
        home: number;
        away: number;
        total: number;
      };
      loses: {
        home: number;
        away: number;
        total: number;
      };
    };
    goals: {
      for: {
        total: {
          home: number;
          away: number;
          total: number;
        };
        average: {
          home: string;
          away: string;
          total: string;
        };
        minute: {
          "0-15": {
            total: number;
            percentage: string;
          };
          "16-30": {
            total: number;
            percentage: string;
          };
          "31-45": {
            total: number;
            percentage: string;
          };
          "46-60": {
            total: number;
            percentage: string;
          };
          "61-75": {
            total: number;
            percentage: string;
          };
          "76-90": {
            total: number;
            percentage: string;
          };
          "91-105": {
            total: number | null;
            percentage: string | null;
          };
          "106-120": {
            total: number | null;
            percentage: string | null;
          };
        };
      };
      against: {
        total: {
          home: number;
          away: number;
          total: number;
        };
        average: {
          home: string;
          away: string;
          total: string;
        };
        minute: {
          "0-15": {
            total: number;
            percentage: string;
          };
          "16-30": {
            total: number;
            percentage: string;
          };
          "31-45": {
            total: number;
            percentage: string;
          };
          "46-60": {
            total: number;
            percentage: string;
          };
          "61-75": {
            total: number;
            percentage: string;
          };
          "76-90": {
            total: number;
            percentage: string;
          };
          "91-105": {
            total: number | null;
            percentage: string | null;
          };
          "106-120": {
            total: number | null;
            percentage: string | null;
          };
        };
      };
    };
    biggest: {
      streak: {
        wins: number;
        draws: number;
        loses: number;
      };
      wins: {
        home: string;
        away: string;
      };
      loses: {
        home: string | null;
        away: string;
      };
      goals: {
        for: {
          home: number;
          away: number;
        };
        against: {
          home: number;
          away: number;
        };
      };
    };
    clean_sheet: {
      home: number;
      away: number;
      total: number;
    };
    failed_to_score: {
      home: number;
      away: number;
      total: number;
    };
    penalty: {
      scored: {
        total: number;
        percentage: string;
      };
      missed: {
        total: number;
        percentage: string;
      };
      saved: {
        total: number;
        percentage: string;
      };
    };
    games: {
      played: {
        total: number;
        home: number;
        away: number;
      };
      wins: {
        total: number;
        home: number;
        away: number;
      };
      draws: {
        total: number;
        home: number;
        away: number;
      };
      loses: {
        total: number;
        home: number;
        away: number;
      };
    };
    goals_per_game: {
      total: {
        goals: number;
        matches: number;
        average: number;
      };
      home: {
        goals: number;
        matches: number;
        average: number;
      };
      away: {
        goals: number;
        matches: number;
        average: number;
      };
    };
    points_per_game: {
      total: number;
      home: number;
      away: number;
    };
    win_rate: {
      total: string;
      home: string;
      away: string;
    };
    over_15: {
      total: {
        home: number;
        away: number;
        total: number;
      };
      average: {
        home: string;
        away: string;
        total: string;
      };
    };
    over_25: {
      total: {
        home: number;
        away: number;
        total: number;
      };
      average: {
        home: string;
        away: string;
        total: string;
      };
    };
    btts: {
      total: {
        home: number;
        away: number;
        total: number;
      };
      average: {
        home: string;
        away: string;
        total: string;
      };
      games: {
        yes: number;
        no: number;
      };
    };
    corners: {
      total: {
        home: number;
        away: number;
        total: number;
      };
      average: {
        home: string;
        away: string;
        total: string;
      };
    };
    cards: {
      total: {
        home: number;
        away: number;
        total: number;
      };
      average: {
        home: string;
        away: string;
        total: string;
      };
      yellow: {
        home: number;
        away: number;
        total: number;
      };
      red: {
        home: number;
        away: number;
        total: number;
      };
    };
  };
};

type Params = {
  params: {
    teamId: string;
  };
};

export type { ApiResponse, Params };
