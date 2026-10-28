import { env } from "cloudflare:workers";

/** Only the Sites gateway supplies verified ChatGPT identity headers. */
export function getRuntimeEnv() {
  return { ...env, trustedAuthHeaders: true };
}
