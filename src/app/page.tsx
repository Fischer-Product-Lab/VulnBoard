import { shareMetadata } from "@/lib/share-metadata";
import { LandingPage } from "@/components/marketing/landing-page";

export const metadata = shareMetadata(
  "VulnBoard | Executive vulnerability risk",
  "See which vulnerabilities to escalate, who owns the fix, and what evidence supports the decision. A public, read-only demo with synthetic data.",
  "/",
);

export default function Home() {
  return <LandingPage />;
}
