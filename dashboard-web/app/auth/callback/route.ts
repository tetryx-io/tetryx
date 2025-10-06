import { NextResponse } from "next/server";

// This callback route is no longer needed for Tetryx username/password auth
// Keeping for compatibility but redirecting to login
export async function GET(request: Request) {
  const { origin } = new URL(request.url);

  // Redirect to login page since we use username/password auth now
  return NextResponse.redirect(`${origin}/auth/login`);
}
