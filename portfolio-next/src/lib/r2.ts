/**
 * Helper to resolve direct Cloudflare R2 CDN URLs for images.
 * All images are fetched 100% directly from your R2 bucket.
 */
export function getR2Url(path: string): string {
  const r2BaseUrl =
    process.env.NEXT_PUBLIC_R2_BASE_URL ||
    "https://pub-6e0d8bd6e666498c8b531c55f0d134a1.r2.dev";

  if (!path) return "";

  // Strip leading "/photos/" or "/" and any existing query strings
  const cleanPath = path
    .replace(/^\/photos\//, "")
    .replace(/^\//, "")
    .split("?")[0];

  const baseUrl = r2BaseUrl.replace(/\/$/, "");

  // Encode spaces and special characters for Cloudflare R2 direct object fetching
  const encodedFileName = cleanPath
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");

  return `${baseUrl}/${encodedFileName}`;
}
