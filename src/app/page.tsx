import type { Metadata } from "next";
import { LandingPage } from "@/components/marketing/landing-page";

export const metadata: Metadata = {
  title: "VulnBoard — Findings into owned risk",
  description:
    "Translate vulnerability findings into business-owned risk, SLA pressure, and executive action. A read-only, synthetic-data demo from Fischer Product Lab.",
};

export default function Home() {
  return <LandingPage />;
}
