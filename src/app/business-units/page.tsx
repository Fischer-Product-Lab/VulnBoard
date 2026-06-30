import { ProductShell } from "@/components/dashboard/product-shell";
import { BusinessUnitsPageContent } from "@/components/dashboard/focused-pages";

export default function BusinessUnitsPage() {
  return (
    <ProductShell active="/business-units">
      <BusinessUnitsPageContent />
    </ProductShell>
  );
}
