/**
 * Prefixes an internal path with the configured base path,
 * so links work both locally ("/") and on GitHub Pages ("/kobido-website/").
 * Always use url('/o-mnie') instead of a raw "/o-mnie" for internal links/assets.
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (/^(https?:|mailto:|tel:)/.test(path)) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
