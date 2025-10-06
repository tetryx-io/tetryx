import { createServerClient, type CookieOptions } from "@supabase/ssr";

export async function createClient() {
  // Hacky way to get the cookies from next/headers.
  // There seems to be an issue with NextJS and Supabase
  // https://github.com/vercel/next.js/issues/49757
  // https://github.com/orgs/supabase/discussions/18086
  // ☠️ Do not attempt to use universal-cookie in a Server Component.
  const next_cookies = require("next/headers").cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: async () => {
          const next_cookies_list = next_cookies.getAll();

          return next_cookies_list;
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              next_cookies.set(name, value, options),
            );
          } catch (error) {
            console.error("Create Supabase Client Error", error);
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  );
}
