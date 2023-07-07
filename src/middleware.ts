// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import getTopScorers from "../lib/getTopScorrers";
// import { ScorersApiResponse } from "../types/topScorers";

// // This function can be marked `async` if using `await` inside
// export async function middleware(request: NextRequest, response: NextResponse) {
//   const path = request.nextUrl.pathname;
//   const id = path.split("/");
//   console.log(id);

//   const result: ScorersApiResponse = await getTopScorers(id[2]);
//   console.log("RESULT", result.errors.requests);
//   if (result.errors.requests === process.env.NEXT_PUBLIC_ERROR) {
//     console.log("I WORKEDD");

//     return NextResponse.redirect(
//       new URL(`${process.env.NEXT_PUBLIC_DEPLOY_URL}`, request.url)
//     );
//   }
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: [
//     `${process.env.NEXT_PUBLIC_DEPLOY_URL}/standings/39/topscorers`,
//     `${process.env.NEXT_PUBLIC_DEPLOY_URL}/standings/78/topscorers`,
//     `${process.env.NEXT_PUBLIC_DEPLOY_URL}/standings/61/topscorers`,
//     `${process.env.NEXT_PUBLIC_DEPLOY_URL}/standings/88/topscorers`,
//     `${process.env.NEXT_PUBLIC_DEPLOY_URL}/standings/140/topscorers`,
//     `${process.env.NEXT_PUBLIC_DEPLOY_URL}/standings/135/topscorers`,
//   ],
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/standings", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/check",
};
