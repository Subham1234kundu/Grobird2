import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/proxy";

export async function proxy(request: NextRequest) {
  // In production the matcher is case-insensitive, so it also catches the
  // static images in public/Admin. Only gate the real /admin routes, or
  // signed-out visitors get those images redirected to the login page.
  const { pathname } = request.nextUrl;
  if (pathname !== "/admin" && !pathname.startsWith("/admin/")) {
    return NextResponse.next();
  }
  return updateSession(request);
}

export const config = {
  matcher: ["/admin/:path*"],
};
