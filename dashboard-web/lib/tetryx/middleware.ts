import { NextRequest, NextResponse } from 'next/server';

export async function updateSession(request: NextRequest) {
  const response = NextResponse.next();

  // Get the session token from cookies
  const sessionToken = request.cookies.get('tetryx-session')?.value;

  // If there's no session token, allow the request to continue
  // The auth provider will handle redirecting to login if needed
  if (!sessionToken) {
    return response;
  }

  try {
    // Parse the session to check if it's expired
    const session = JSON.parse(sessionToken);

    // Check if session is expired
    if (session.expires_at && session.expires_at < Date.now()) {
      // Session is expired, remove the cookie
      response.cookies.delete('tetryx-session');
    } else {
      // Session is valid, refresh the cookie expiry
      response.cookies.set('tetryx-session', sessionToken, {
        httpOnly: false, // Allow client-side access for our auth provider
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });
    }
  } catch (error) {
    // Invalid session data, remove the cookie
    console.error('Invalid session data in middleware:', error);
    response.cookies.delete('tetryx-session');
  }

  return response;
}