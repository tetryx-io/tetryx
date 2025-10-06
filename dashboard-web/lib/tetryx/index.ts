import { createTetryxClient } from './client';

const tetryxUrl = process.env.NEXT_PUBLIC_TETRYX_URL!;
const tetryxAnonKey = process.env.NEXT_PUBLIC_TETRYX_ANON_KEY!;
const tetryxServiceRoleKey = process.env.TETRYX_SERVICE_ROLE_KEY;

if (!tetryxUrl) {
  throw new Error('Missing NEXT_PUBLIC_TETRYX_URL environment variable');
}

if (!tetryxAnonKey) {
  throw new Error('Missing NEXT_PUBLIC_TETRYX_ANON_KEY environment variable');
}

// Create the main Tetryx client instance
export const tetryx = createTetryxClient({
  url: tetryxUrl,
  anonKey: tetryxAnonKey,
  serviceRoleKey: tetryxServiceRoleKey,
});

// Export types for convenience
export type {
  TetryxConfig,
  User,
  Session,
  AuthResponse,
  LoginCredentials,
  SignUpCredentials,
} from './client';

export { createTetryxClient } from './client';