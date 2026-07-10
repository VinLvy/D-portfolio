import { NextResponse } from "next/server";

export function middleware(request) {
  const maintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";
  const { pathname } = request.nextUrl;

  if (maintenanceMode && pathname !== "/maintenance") {
    // Rewrite the request to /maintenance so the user sees the maintenance screen
    // but the URL in the address bar remains unchanged.
    return NextResponse.rewrite(new URL("/maintenance", request.url));
  }

  // Redirect /maintenance to home page if maintenance mode is OFF
  if (!maintenanceMode && pathname === "/maintenance") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, icon.png, manifest.json (standard static assets)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|icon.png|manifest.json).*)",
  ],
};
