import { ProductShell } from "@/components/dashboard/product-shell";
import { SlaPageContent } from "@/components/dashboard/focused-pages";

export default function SlaPage() {
  return (
    <ProductShell active="/sla">
      <SlaPageContent />
    </ProductShell>
  );
}
