export function getAuthRedirectUrl(path = "/auth/callback"): string {
  const base = import.meta.env.BASE_URL ?? "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
  return `${window.location.origin}${normalizedBase}${normalizedPath}`;
}

export function getPostLoginPath(search = window.location.search): string {
  const params = new URLSearchParams(search);
  const redirect = params.get("redirect");
  if (redirect && redirect.startsWith("/") && !redirect.startsWith("//")) {
    return redirect;
  }
  return "/dashboard";
}
