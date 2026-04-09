const DEFAULT_PRIMARY = "https://example.com/primary";
const DEFAULT_SECONDARY = "https://example.com/secondary";

function normalizeUrl(raw: string | undefined, fallback: string): string {
  const v = (raw ?? "").trim();
  if (!v) return fallback;
  try {
    const u = new URL(v);
    if (u.protocol !== "https:" && u.protocol !== "http:") return fallback;
    if (u.protocol === "http:" && import.meta.env.PROD) return fallback;
    return u.href;
  } catch {
    return fallback;
  }
}

export const bannerUrl = (import.meta.env.VITE_BANNER_URL ?? "").trim() || "/banner.svg";

export const linkPrimary = normalizeUrl(
  import.meta.env.VITE_LINK_PRIMARY_URL,
  DEFAULT_PRIMARY
);

export const linkSecondary = normalizeUrl(
  import.meta.env.VITE_LINK_SECONDARY_URL,
  DEFAULT_SECONDARY
);

export const labelPrimary =
  (import.meta.env.VITE_LINK_PRIMARY_LABEL ?? "").trim() || "Первая страница";

export const labelSecondary =
  (import.meta.env.VITE_LINK_SECONDARY_LABEL ?? "").trim() || "Вторая страница";
