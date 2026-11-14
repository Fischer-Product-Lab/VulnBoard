import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { shareMetadata, siteOrigin } from "@/lib/share-metadata";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteOrigin,
  ...shareMetadata(
    "VulnBoard | Fischer Product Lab",
    "A read-only portfolio demo of executive vulnerability risk and remediation. All data is synthetic.",
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
