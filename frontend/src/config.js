/**
 * Backend API base URL (no trailing slash).
 * Set VITE_API_BASE_URL when building or serving the frontend against a deployed API.
 * Example: VITE_API_BASE_URL=https://api.yoursite.com npm run build
 */
export function getApiBaseUrl() {
  const raw = import.meta.env.VITE_API_BASE_URL;
  if (typeof raw === "string" && raw.length > 0) {
    return raw.replace(/\/$/, "");
  }
  return "http://localhost:5000";
}
