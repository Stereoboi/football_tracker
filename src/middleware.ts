import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import getTopScorers from "../lib/getTopScorrers";
import { ScorersApiResponse } from "../types/topScorers";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest, response: NextResponse) {
  const path = request.nextUrl.pathname;
  const id = path.split("/");
  console.log(id);

  const result: ScorersApiResponse = await getTopScorers(id[2]);
  console.log("RESULT", result.errors.requests);
  if (result.errors.requests === process.env.NEXT_PUBLIC_ERROR) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/standings/39/topscorers",
    "/standings/78/topscorers",
    "/standings/61/topscorers",
    "/standings/88/topscorers",
    "/standings/140/topscorers",
    "/standings/135/topscorers",
  ],
};
