import { readFileSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { sampleOrderId } from "@/data/sampleOrder";

export const metadata: Metadata = {
  title: "Invoice",
  robots: { index: false, follow: true },
};

export default function InvoicePage() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "invoices",
    `${sampleOrderId}.html`
  );
  const invoiceHtml = readFileSync(filePath, "utf-8");

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Checkout", href: "/checkout" },
          { label: "Invoice" },
        ]}
      />

      <iframe
        title={`Invoice ${sampleOrderId}`}
        srcDoc={invoiceHtml}
        className="h-[1450px] w-full rounded-xl border border-line bg-white"
      />
    </div>
  );
}
