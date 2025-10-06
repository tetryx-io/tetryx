/**
 * Tetryx Client - Similar to Supabase client
 * Handles authentication, API requests, and service management
 */

export interface TetryxConfig {
  url: string;
  anonKey: string;
  serviceRoleKey?: string;
}

export interface User {
  id: string;
  email: string;
  created_at: string;
  last_sign_in_at?: string;
  role?: 'admin' | 'user';
}

export interface Session {
  access_token: string;
  refresh_token: string;
  expires_at: number;
  user: User;
}

export interface AuthResponse {
  data: {
    user: User | null;
    session: Session | null;
  };
  error: Error | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignUpCredentials {
  email: string;
  password: string;
}

class TetryxClient {
  private config: TetryxConfig;
  private currentSession: Session | null = null;

  constructor(config: TetryxConfig) {
    this.config = config;
    this.loadStoredSession();
  }

  private loadStoredSession() {
    if (typeof window !== 'undefined') {
      // Try to get session from localStorage first
      let stored = localStorage.getItem('tetryx-session');

      // If not in localStorage, try to get from cookies
      if (!stored) {
        const cookies = document.cookie.split(';');
        const sessionCookie = cookies.find(cookie =>
          cookie.trim().startsWith('tetryx-session=')
        );
        if (sessionCookie) {
          stored = decodeURIComponent(sessionCookie.split('=')[1]);
        }
      }

      if (stored) {
        try {
          this.currentSession = JSON.parse(stored);
          // Check if session is expired
          if (this.currentSession && this.currentSession.expires_at < Date.now()) {
            this.signOut();
          }
        } catch (error) {
          console.error('Failed to parse stored session:', error);
          localStorage.removeItem('tetryx-session');
          this.clearSessionCookie();
        }
      }
    }
  }

  private storeSession(session: Session) {
    if (typeof window !== 'undefined') {
      const sessionData = JSON.stringify(session);
      localStorage.setItem('tetryx-session', sessionData);

      // Also set as cookie for middleware access
      const maxAge = 60 * 60 * 24 * 7; // 7 days
      document.cookie = `tetryx-session=${encodeURIComponent(sessionData)}; max-age=${maxAge}; path=/; SameSite=Lax${
        window.location.protocol === 'https:' ? '; Secure' : ''
      }`;
    }
    this.currentSession = session;
  }

  private clearSessionCookie() {
    if (typeof window !== 'undefined') {
      document.cookie = 'tetryx-session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
  }

  private async apiRequest(endpoint: string, options: RequestInit = {}) {
    const url = `${this.config.url}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      'apikey': this.config.anonKey,
      ...(this.currentSession && {
        'Authorization': `Bearer ${this.currentSession.access_token}`
      }),
      ...options.headers,
    };

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Tetryx API Error: ${response.status} ${error}`);
    }

    return response.json();
  }

  // Auth methods
  async signInWithPassword(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const response = await this.apiRequest('/auth/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
      });

      if (response.session) {
        this.storeSession(response.session);
      }

      return {
        data: {
          user: response.user,
          session: response.session,
        },
        error: null,
      };
    } catch (error) {
      return {
        data: { user: null, session: null },
        error: error as Error,
      };
    }
  }

  async signUp(credentials: SignUpCredentials): Promise<AuthResponse> {
    try {
      const response = await this.apiRequest('/auth/signup', {
        method: 'POST',
        body: JSON.stringify(credentials),
      });

      if (response.session) {
        this.storeSession(response.session);
      }

      return {
        data: {
          user: response.user,
          session: response.session,
        },
        error: null,
      };
    } catch (error) {
      return {
        data: { user: null, session: null },
        error: error as Error,
      };
    }
  }

  async signOut(): Promise<{ error: Error | null }> {
    try {
      if (this.currentSession) {
        await this.apiRequest('/auth/logout', {
          method: 'POST',
        });
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Always clear local session
      if (typeof window !== 'undefined') {
        localStorage.removeItem('tetryx-session');
        this.clearSessionCookie();
      }
      this.currentSession = null;
    }

    return { error: null };
  }

  async getSession(): Promise<{ data: { session: Session | null }, error: Error | null }> {
    return {
      data: { session: this.currentSession },
      error: null,
    };
  }

  async getUser(): Promise<{ data: { user: User | null }, error: Error | null }> {
    return {
      data: { user: this.currentSession?.user || null },
      error: null,
    };
  }

  // Cache management methods
  async getCaches() {
    return this.apiRequest('/api/caches');
  }

  async getCache(name: string) {
    return this.apiRequest(`/api/caches/${name}`);
  }

  async createCache(cacheData: any) {
    return this.apiRequest('/api/caches', {
      method: 'POST',
      body: JSON.stringify(cacheData),
    });
  }

  async deleteCache(name: string) {
    return this.apiRequest(`/api/caches/${name}`, {
      method: 'DELETE',
    });
  }

  async getSystemStats() {
    return this.apiRequest('/api/stats');
  }

  // Auth state change listener
  onAuthStateChange(callback: (event: string, session: Session | null) => void) {
    // For now, just call immediately with current state
    callback(this.currentSession ? 'SIGNED_IN' : 'SIGNED_OUT', this.currentSession);

    // Return a cleanup function
    return () => {};
  }
}

// Create singleton instance
export const createTetryxClient = (config: TetryxConfig) => {
  return new TetryxClient(config);
};

export default TetryxClient;