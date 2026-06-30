import { ProductShell } from "@/components/dashboard/product-shell";
import { ExceptionsPageContent } from "@/components/dashboard/focused-pages";

export default function ExceptionsPage() {
  return (
    <ProductShell active="/exceptions">
      <ExceptionsPageContent />
    </ProductShell>
  );
}
