import { shareMetadata } from "@/lib/share-metadata";
import { ProductShell } from "@/components/dashboard/product-shell";
import { VulnerabilityDashboard } from "@/components/dashboard/vulnerability-dashboard";

export const metadata = shareMetadata(
  "VulnBoard | Executive dashboard",
  "Read a synthetic executive decision brief, then trace urgent remediation work to the team that owns it. No sign-in required.",
  "/dashboard",
);

export default function DemoPage() {
  return (
    <ProductShell active="/dashboard">
      <VulnerabilityDashboard />
    </ProductShell>
  );
}
