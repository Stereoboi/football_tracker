// {
//     get: 'teams',
//     parameters: { id: '50' },
//     errors: [],
//     results: 1,
//     paging: { current: 1, total: 1 },
//     response: [
//       {
//         team: {
//           id: 50,
//           name: 'Manchester City',
//           code: 'MAC',
//           country: 'England',
//           founded: 1880,
//           national: false,
//           logo: 'https://media-2.api-sports.io/football/teams/50.png'
//         },
//         venue: {
//           id: 555,
//           name: 'Etihad Stadium',
//           address: 'Rowsley Street',
//           city: 'Manchester',
//           capacity: 55097,
//           surface: 'grass',
//           image: 'https://media-1.api-sports.io/football/venues/555.png'
//         }
//       }
//     ]
// }

interface TeamType {
  get: string;
  parameters: { id: string };
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
    national: false;
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

export type { TeamType, TeamResponse };
