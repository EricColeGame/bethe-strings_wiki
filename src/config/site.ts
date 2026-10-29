export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Bethe Strings Wiki",
  shortName: "Bethe Strings",
  logoText: "B",
  tagline: "Bethe strings research explained",
  description: "An unofficial science reference on Bethe strings and one-dimensional quantum systems.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bethe-strings.wiki",
  supportEmail: "support@bethe-strings.wiki",
  gameUrl: "https://www.nature.com/articles/s41467-026-76018-0",
  heroVideoId: "",
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
