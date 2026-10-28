import type { D1Database } from "@cloudflare/workers-types";

/** Node/Vercel runtime. Cloudflare's Vite build aliases this module. */
export function getRuntimeEnv(): { DB?: D1Database; ADMIN_EMAIL?: string; trustedAuthHeaders: boolean } {
  return { ADMIN_EMAIL: process.env.ADMIN_EMAIL, trustedAuthHeaders: false };
}
