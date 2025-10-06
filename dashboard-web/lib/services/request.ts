import axios from "axios";
const axiosApiInstance = axios.create();
import { createClient as createSupabaseClientSide } from "@/lib/supabase/client";
import { createClient as createSupabaseServerSide } from "@/lib/supabase/server";

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async (config) => {
    try {
      config.headers = config.headers || {};
      config.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

      const supabase =
        typeof window === "undefined"
          ? await createSupabaseServerSide()
          : await createSupabaseClientSide();

      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) {
        throw error;
      }

      if (session) {
        config.headers["Authorization"] = `Bearer ${session.access_token}`;
        // Set Authorization header in a different way. The Authorization header is not set in the config.headers object
        // or is being overwritten by the somewhere else.
        config.headers['AuthZ'] = session.access_token; 
      }

      return Promise.resolve(config);
    } catch (error) {
      console.error("Interceptor error:", error);
      return Promise.reject(error);
    }
  },
  (error) => {
    console.error("🔴 Interceptor rejection:", error);
    return Promise.reject(error);
  },
);

export default axiosApiInstance;
