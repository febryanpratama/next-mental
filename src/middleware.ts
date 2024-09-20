import { NextRequest, NextResponse } from "next/server";

import withAuth from "./middleware/withAuth";

export function mainMiddleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  // matcher: ["/", "/home", "/mbti", "/history-pkb/:path*"],
  matcher: ["/", "/home", "/mbti"],
};

export default withAuth(mainMiddleware, ["/", "/home", "/mbti"]);
