// {
//     get: 'teams',
//     parameters: { search: 'liverp' },
//     errors: [],
//     results: 10,
//     paging: { current: 1, total: 1 },
//     response:  [
//       {
//         team: {
//           id: 40,
//           name: 'Liverpool',
//           code: 'LIV',
//           country: 'England',
//           founded: 1892,
//           national: false,
//           logo: 'https://media-3.api-sports.io/football/teams/40.png'
//         },
//         venue: {
//           id: 550,
//           name: 'Anfield',
//           address: 'Anfield Road',
//           city: 'Liverpool',
//           capacity: 55212,
//           surface: 'grass',
//           image: 'https://media-3.api-sports.io/football/venues/550.png'
//         }
//       },
//     ]
// }

interface SearchTeam {
  get: string;
  parameters: { search: string };
  errors: any[];
  results: number;
  paging: { current: number; total: number };
  response: TeamResponse[];
}

interface TeamResponse {
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

export type { SearchTeam };
