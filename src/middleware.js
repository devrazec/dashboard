import { NextResponse } from "next/server";

const languageRedirects = {
  "/pages/English": "/pages/english",
  "/pages/Portuguese": "/pages/portuguese",
  "/pages/Spanish": "/pages/spanish",
};

export function middleware(request) {
  const destination = languageRedirects[request.nextUrl.pathname];

  if (!destination) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL(destination, request.url), 308);
}

export const config = {
  matcher: ["/pages/:path*"],
};
