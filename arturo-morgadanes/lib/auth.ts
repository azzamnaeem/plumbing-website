/**
 * =============================================================================
 * ADMIN AUTHENTICATION
 * =============================================================================
 *
 * Simple password-based authentication for the admin panel.
 * NO user database - single admin password stored in environment variables.
 *
 * Configuration (in .env.local):
 *   ADMIN_PASSWORD_HASH - bcrypt hash of admin password
 *   JWT_SECRET - secret key for signing JWT tokens
 *
 * To generate a password hash:
 *   node scripts/generate-password-hash.js "your-password"
 *
 * Future: To enable multi-user support, set ENABLE_USER_ACCOUNTS=true
 * and implement a user database. Currently disabled.
 *
 * =============================================================================
 */

import { SignJWT, jwtVerify } from "jose";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

// Feature flag for user accounts (disabled - using env var password only)
const ENABLE_USER_ACCOUNTS = process.env.ENABLE_USER_ACCOUNTS === "true";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "default-secret-change-in-production"
);

const COOKIE_NAME = "admin_token";

export interface JWTPayload {
  isAdmin: boolean;
  iat: number;
  exp: number;
}

/**
 * Verify password against stored hash
 */
export async function verifyPassword(password: string): Promise<boolean> {
  const storedHash = process.env.ADMIN_PASSWORD_HASH;
  if (!storedHash) {
    console.error("ADMIN_PASSWORD_HASH not set in environment variables");
    return false;
  }
  return bcrypt.compare(password, storedHash);
}

/**
 * Generate a hash for a password (use this to create ADMIN_PASSWORD_HASH)
 */
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

/**
 * Create a JWT token
 */
export async function createToken(): Promise<string> {
  const token = await new SignJWT({ isAdmin: true })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(JWT_SECRET);
  return token;
}

/**
 * Verify a JWT token
 */
export async function verifyToken(token: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as unknown as JWTPayload;
  } catch {
    return null;
  }
}

/**
 * Set the auth cookie
 */
export async function setAuthCookie(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24, // 24 hours
    path: "/",
  });
}

/**
 * Remove the auth cookie
 */
export async function removeAuthCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

/**
 * Get the auth token from cookies
 */
export async function getAuthToken(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(COOKIE_NAME)?.value;
}

/**
 * Check if the current request is authenticated
 */
export async function isAuthenticated(): Promise<boolean> {
  const token = await getAuthToken();
  if (!token) return false;
  const payload = await verifyToken(token);
  return payload?.isAdmin === true;
}
