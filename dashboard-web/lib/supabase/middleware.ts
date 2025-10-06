import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value),
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // IMPORTANT: Avoid writing any logic between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("🫅🏽 user", user);

  const unauthenticatedPaths = [
    /^\/auth\/(login|signup|forgot-password|reset-password)\/?(?:\?.*)?$/, // Allow unauthenticated access to login and signup pages and forgot-password and reset-password pages
    /^\/?(?:\?.*)?$/, // Allow unauthenticated access to home page
    /^\/agent(?:\/.*?)?\/?(?:\?.*)?$/, // Allow unauthenticated access to agents and their subpaths
    /^\/docs(?:\/.*?)?\/?(?:\?.*)?$/, // Allow unauthenticated access to docs and their subpaths
    /^\/articles(?:\/.*?)?\/?(?:\?.*)?$/, // Allow unauthenticated access to articles and their subpaths
    /^\/developers(?:\/.*?)?\/?(?:\?.*)?$/, // Allow unauthenticated access to developers and their subpaths
    /^\/legal(?:\/.*?)?\/?(?:\?.*)?$/, // Allow unauthenticated access to legal and their subpaths
    /^\/invite\/.*/, // Allow unauthenticated access to invite pages
    /^\/atrium\/favicon\/.*/, // Allow unauthenticated access to the favicon directory
  ];

  // Function to check if the path requires authentication
  const requiresAuth = (path: string) => {
    return !unauthenticatedPaths.some((regex) => regex.test(path));
  };

  console.log(
    "Requires auth",
    request.nextUrl.pathname,
    requiresAuth(request.nextUrl.pathname),
  );

  if (!user && requiresAuth(request.nextUrl.pathname)) {
    // Redirect to login if authentication is required but user is not logged in
    const url = request.nextUrl.clone();
    url.pathname = "/auth/login";
    url.searchParams.set(
      "redirect_to",
      request.nextUrl.pathname + request.nextUrl.search,
    );
    return NextResponse.redirect(url);
  }

  // IMPORTANT: You *must* return the supabaseResponse object as it is!
  return supabaseResponse;
}
