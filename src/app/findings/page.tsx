import { ProductShell } from "@/components/dashboard/product-shell";
import { FindingsPageContent } from "@/components/dashboard/focused-pages";

export default function FindingsPage() {
  return (
    <ProductShell active="/findings">
      <FindingsPageContent />
    </ProductShell>
  );
}
