import { ProductShell } from "@/components/dashboard/product-shell";
import { ReportsPageContent } from "@/components/dashboard/focused-pages";

export default function ReportsPage() {
  return (
    <ProductShell active="/reports">
      <ReportsPageContent />
    </ProductShell>
  );
}
