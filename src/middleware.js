import { NextResponse } from "next/server";

export function middleware(request) {
  // if(request.nextUrl.pathname!="/login"){
  return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  // }
}

export const config = {
  matcher: ["/admin"],
};
