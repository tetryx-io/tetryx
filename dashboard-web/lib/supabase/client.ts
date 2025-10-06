import { createBrowserClient } from "@supabase/ssr";
import Cookies from "universal-cookie";

export async function createClient() {
  // const { cookies } = await import('next/headers')
  const cookies = new Cookies();

  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: async () => {
          const cookie_list = cookies.getAll();
          return Object.entries(cookie_list ?? {}).map(([name, value]) => ({
            name,
            value: (value as any).toString(),
          }));
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookies.set(name, value, options),
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
