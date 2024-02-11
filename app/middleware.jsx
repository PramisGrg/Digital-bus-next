import { NextResponse } from "next/server";
import { getCookie } from "cookies-next";

export function middleware(request) {
  const tokenRequest = getCookie("token", token);
  const roleRequest = getCookie("role", role);

  if (request.nextUrl.pathname.startsWith("/dashboard/user")) {
    return NextResponse.rewrite(new URL("/", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/dashboard/admin-dahboard")) {
    return NextResponse.rewrite(new URL("/admin-register", request.url));
  }
}
