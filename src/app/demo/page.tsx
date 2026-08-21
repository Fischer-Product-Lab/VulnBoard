import { ProductShell } from "@/components/dashboard/product-shell";
import { VulnerabilityDashboard } from "@/components/dashboard/vulnerability-dashboard";

export default function DemoPage() {
  return (
    <ProductShell active="/dashboard">
      <VulnerabilityDashboard />
    </ProductShell>
  );
}
