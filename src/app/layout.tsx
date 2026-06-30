import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fischer Product Lab | VulnBoard",
  description:
    "Executive vulnerability metrics and remediation analytics portfolio demo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
