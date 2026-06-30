import { ProductShell } from "@/components/dashboard/product-shell";
import { ApplicationsPageContent } from "@/components/dashboard/focused-pages";

export default function ApplicationsPage() {
  return (
    <ProductShell active="/applications">
      <ApplicationsPageContent />
    </ProductShell>
  );
}
