// {
//     get: 'players/squads',
//     parameters: { team: '50' },
//     errors: [],
//     results: 1,
//     paging: { current: 1, total: 1 },
//     response: [
//       {
//         team: { id: 50, name: 'Manchester City', logo: 'https://media-2.api-sports.io/football/teams/50.png' },
//         players:  [
//           {
//             id: 25004,
//             name: 'S. Ortega',
//             age: 31,
//             number: 18,
//             position: 'Goalkeeper',
//             photo: 'https://media-2.api-sports.io/football/players/25004.png'
//           },

//         ]
//       }
//     ]
// }

// interface PlayersType {
//   get: string;
//   parameters: { id: string };
//   errors: any[];
//   results: number;
//   paging: { current: number; total: number };
//   response: PlayersResponse[];
// }

// interface PlayersResponse {
//   team: { id: number; name: string; logo: string };
//   players: [
//     {
//       id: number;
//       name: string;
//       age: number;
//       number: number;
//       position: string;
//       photo: string;
//     }
//   ];
// }

// export type { PlayersType, PlayersResponse };

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
