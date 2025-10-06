import axios from "axios";
import { tetryx } from "@/lib/tetryx";

const axiosApiInstance = axios.create();

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async (config) => {
    try {
      config.headers = config.headers || {};
      config.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

      // Get session from Tetryx client
      const { data, error } = await tetryx.getSession();

      if (error) {
        console.error("Session error:", error);
        return Promise.resolve(config);
      }

      if (data.session) {
        config.headers["Authorization"] = `Bearer ${data.session.access_token}`;
        // Set Authorization header in a different way. The Authorization header is not set in the config.headers object
        // or is being overwritten somewhere else.
        config.headers['AuthZ'] = data.session.access_token;
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
