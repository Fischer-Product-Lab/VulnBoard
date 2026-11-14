import { shareMetadata } from "@/lib/share-metadata";
import { ProductShell } from "@/components/dashboard/product-shell";
import { FindingsPageContent } from "@/components/dashboard/focused-pages";

export const metadata = shareMetadata(
  "VulnBoard | Prioritized findings",
  "Explore a read-only queue of illustrative vulnerability findings, with SLA status, ownership, and evidence.",
  "/findings",
);

export default function FindingsPage() {
  return (
    <ProductShell active="/findings">
      <FindingsPageContent />
    </ProductShell>
  );
}
