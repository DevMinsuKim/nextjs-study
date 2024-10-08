import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("미들웨어가 실행되고있음!");
  if (request.nextUrl.pathname.startsWith("/products/1004")) {
    console.log("경로을 리다이렉팅함");
    return NextResponse.redirect(new URL("/products", request.url));
  }
}

export const config = {
  matcher: ["/products/:path*"],
};
