// @ts-nocheck
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import ansis from "ansis";
import { red, black, inverse, reset } from "ansis/colors";
import { updateSession } from '@/lib/tetryx/middleware'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  /*
   * Vercel already logs these URL requests. Avoid logging them again.
   */
  if (!process.env.NEXT_PUBLIC_IS_VERCEL) {
    console.debug(ansis.green`🟣 ${req.method}:${reset.cyan` ${req.url}`}`);
  }

  return await updateSession(req)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|json|png|jpg|jpeg|gif|webp)$).*)',
  ],
}