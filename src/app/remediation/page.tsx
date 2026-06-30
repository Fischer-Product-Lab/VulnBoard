import { ProductShell } from "@/components/dashboard/product-shell";
import { RemediationPageContent } from "@/components/dashboard/focused-pages";

export default function RemediationPage() {
  return (
    <ProductShell active="/remediation">
      <RemediationPageContent />
    </ProductShell>
  );
}
