import type { Metadata } from "next";
import Link from "next/link";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { ProductThumb } from "@/components/product/ProductThumb";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { sampleCartItems } from "@/data/sampleOrder";
import { buildOrderLines, computeTotals } from "@/lib/orderMath";

export const metadata: Metadata = {
  title: "Your cart",
  robots: { index: false, follow: true },
};

export default function CartPage() {
  const lines = buildOrderLines(sampleCartItems);
  const { subtotal, tax, shipping, total } = computeTotals(lines);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Cart" }]} />

      <h1 className="font-display text-3xl font-semibold text-ink">Your cart</h1>
      <p className="mt-1 text-sm text-muted">
        {lines.length} {lines.length === 1 ? "item" : "items"} in cart
      </p>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="flex flex-col gap-4 lg:col-span-2">
          {lines.map((line) => (
            <div
              key={line.productId}
              className="relative flex flex-col gap-4 rounded-xl border border-line bg-surface p-4 transition-shadow hover:shadow-md sm:flex-row"
            >
              {}
              <Link
                href={`/product/${line.product.id}`}
                aria-label={`View ${line.product.name}`}
                className="absolute inset-0 z-0 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy focus-visible:outline-offset-2"
              >
                <span className="sr-only">View {line.product.name}</span>
              </Link>

              <ProductThumb
                image={line.product.image}
                name={line.product.name}
                className="h-20 w-full sm:w-20 sm:shrink-0"
                sizes="80px"
              />

              <div className="flex flex-1 flex-col gap-2">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-display text-sm font-medium text-ink">
                      {line.product.name}
                    </p>
                    <p className="text-xs text-muted">{line.product.category}</p>
                  </div>
                  {/* Display only */}
                  <button
                    type="button"
                    disabled
                    aria-label={`Remove ${line.product.name}`}
                    className="relative z-10 text-muted opacity-40"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <div className="relative z-10 flex items-center rounded-lg border border-line">
                    <button
                      type="button"
                      disabled
                      aria-label="Decrease quantity"
                      className="flex h-8 w-8 items-center justify-center text-muted opacity-40"
                    >
                      <Minus size={13} />
                    </button>
                    <span className="w-8 text-center font-mono text-sm">
                      {line.quantity}
                    </span>
                    <button
                      type="button"
                      disabled
                      aria-label="Increase quantity"
                      className="flex h-8 w-8 items-center justify-center text-muted opacity-40"
                    >
                      <Plus size={13} />
                    </button>
                  </div>

                  <span className="price-tag font-mono text-sm font-semibold text-ink">
                    ${line.lineTotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="h-fit rounded-xl border border-line bg-surface p-5">
          <h2 className="font-display text-lg font-semibold text-ink">Order summary</h2>
          <dl className="mt-4 flex flex-col gap-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted">Subtotal</dt>
              <dd className="font-mono">${subtotal.toFixed(2)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted">Tax (7%)</dt>
              <dd className="font-mono">${tax.toFixed(2)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted">Shipping</dt>
              <dd className="font-mono">
                {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
              </dd>
            </div>
            <div className="mt-2 flex justify-between border-t border-line pt-3 text-base font-semibold">
              <dt>Total</dt>
              <dd className="font-mono">${total.toFixed(2)}</dd>
            </div>
          </dl>

          <Link
            href="/checkout"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-yellow px-5 py-3 text-sm font-semibold text-navy hover:bg-yellow-dark"
          >
            Checkout
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/"
            className="mt-3 block text-center text-xs text-muted hover:text-ink"
          >
            Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}
