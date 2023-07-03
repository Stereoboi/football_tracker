type Team = {
  get: string;
  parameters: {
    team: string;
    season: string;
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
            total: number;
            percentage: string;
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
            total: number;
            percentage: string;
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
        home: string;
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
      total: number;
    };
    lineups: [
      {
        formation: string;
        played: number;
      },
      {
        formation: string;
        played: number;
      },
      {
        formation: string;
        played: number;
      },
      {
        formation: string;
        played: number;
      }
    ];
    cards: {
      yellow: {
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
      red: {
        "0-15": {
          total: number | null;
          percentage: string | null;
        };
        "16-30": {
          total: number | null;
          percentage: string | null;
        };
        "31-45": {
          total: number | null;
          percentage: string | null;
        };
        "46-60": {
          total: number | null;
          percentage: string | null;
        };
        "61-75": {
          total: number | null;
          percentage: string | null;
        };
        "76-90": {
          total: number | null;
          percentage: string | null;
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
};

type Leagues = {
  get: string;
  parameters: {
    id: string;
  };
  errors: any[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: [
    {
      league: {
        id: number;
        name: string;
        type: string;
        logo: string;
      };
      country: {
        name: string;
        code: string;
        flag: string;
      };
      seasons: [
        {
          year: number;
          start: string;
          end: string;
          current: boolean;
          coverage: {
            fixtures: {
              events: boolean;
              lineups: boolean;
              statistics_fixtures: boolean;
              statistics_players: boolean;
            };
            standings: boolean;
            players: boolean;
            top_scorers: boolean;
            top_assists: boolean;
            top_cards: boolean;
            injuries: boolean;
            predictions: boolean;
            odds: boolean;
          };
        },
        {
          year: number;
          start: string;
          end: string;
          current: boolean;
          coverage: {
            fixtures: {
              events: boolean;
              lineups: boolean;
              statistics_fixtures: boolean;
              statistics_players: boolean;
            };
            standings: boolean;
            players: boolean;
            top_scorers: boolean;
            top_assists: boolean;
            top_cards: boolean;
            injuries: boolean;
            predictions: boolean;
            odds: boolean;
          };
        }
      ];
    }
  ];
};

type Teams = {
  get: string;
  parameters: {
    id: string;
    league: string;
  };
  errors: any[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: [
    {
      team: {
        id: number;
        name: string;
        code: string;
        country: string;
        founded: number;
        national: boolean;
        logo: string;
      };
      venue: {
        id: number;
        name: string;
        address: string;
        city: string;
        capacity: number;
        surface: string;
        image: string;
      };
    }
  ];
};

type League = {
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    standings: Standing[][];
  };
};

type Standing = {
  rank: number;
  team: {
    id: number;
    name: string;
    logo: string;
  };
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string | null;
  all: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: {
      for: number;
      against: number;
    };
  };
  home: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: {
      for: number;
      against: number;
    };
  };
  away: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: {
      for: number;
      against: number;
    };
  };
  update: string;
};

type StandingsResponse = {
  get: string;
  parameters: {
    league: string;
    season: string;
  };
  errors: any[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: League[];
};

export { Team, League, Standing, StandingsResponse, Teams, Leagues };
