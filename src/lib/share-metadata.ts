import type { Metadata } from "next";

export const siteOrigin = new URL("https://vuln-board-fpl.vercel.app");

const image = {
  url: "/share/vulnboard.png",
  width: 1200,
  height: 630,
  alt: "VulnBoard · Vulnerability risk, ready for a decision · Fischer Product Lab",
};

export function shareMetadata(
  title: string,
  description: string,
  canonical?: string,
): Metadata {
  return {
    title,
    description,
    ...(canonical ? { alternates: { canonical } } : {}),
    openGraph: {
      type: "website",
      siteName: "Fischer Product Lab",
      title,
      description,
      ...(canonical ? { url: canonical } : {}),
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: image.url, alt: image.alt }],
    },
  };
}
