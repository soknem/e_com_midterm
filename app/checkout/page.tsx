import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { sampleCartItems, sampleCustomer } from "@/data/sampleOrder";
import { buildOrderLines, computeTotals } from "@/lib/orderMath";

export const metadata: Metadata = {
  title: "Checkout",
  robots: { index: false, follow: true },
};


export default function CheckoutPage() {
  const lines = buildOrderLines(sampleCartItems);
  const { subtotal, tax, shipping, total } = computeTotals(lines);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Cart", href: "/cart" },
          { label: "Checkout" },
        ]}
      />

      <h1 className="font-display text-3xl font-semibold text-ink">Checkout</h1>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-ink" htmlFor="fullName">
              Full name
            </label>
            <input
              id="fullName"
              type="text"
              defaultValue={sampleCustomer.fullName}
              className="w-full rounded-lg border border-line bg-surface px-3 py-2 text-sm focus:border-navy-light focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-ink" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                defaultValue={sampleCustomer.email}
                className="w-full rounded-lg border border-line bg-surface px-3 py-2 text-sm focus:border-navy-light focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-ink" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                defaultValue={sampleCustomer.phone}
                className="w-full rounded-lg border border-line bg-surface px-3 py-2 text-sm focus:border-navy-light focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-ink" htmlFor="address">
              Shipping address
            </label>
            <input
              id="address"
              type="text"
              defaultValue={sampleCustomer.address}
              className="w-full rounded-lg border border-line bg-surface px-3 py-2 text-sm focus:border-navy-light focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-ink" htmlFor="city">
              City
            </label>
            <input
              id="city"
              type="text"
              defaultValue={sampleCustomer.city}
              className="w-full rounded-lg border border-line bg-surface px-3 py-2 text-sm focus:border-navy-light focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-ink" htmlFor="notes">
              Order notes (optional)
            </label>
            <textarea
              id="notes"
              defaultValue={sampleCustomer.notes}
              rows={3}
              className="w-full rounded-lg border border-line bg-surface px-3 py-2 text-sm focus:border-navy-light focus:outline-none"
            />
          </div>

          <Link
            href="/invoice"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-yellow px-5 py-3 text-sm font-semibold text-navy hover:bg-yellow-dark"
          >
            <Lock size={15} />
            Place order
            <ArrowRight size={15} />
          </Link>
        </div>

        <aside className="h-fit rounded-xl border border-line bg-surface p-5">
          <h2 className="font-display text-lg font-semibold text-ink">Order review</h2>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            {lines.map((line) => (
              <li key={line.productId} className="flex justify-between gap-3">
                <span className="text-muted">
                  {line.product.name} &times; {line.quantity}
                </span>
                <span className="font-mono">${line.lineTotal.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <dl className="mt-4 flex flex-col gap-2 border-t border-line pt-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted">Subtotal</dt>
              <dd className="font-mono">${subtotal.toFixed(2)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted">Tax</dt>
              <dd className="font-mono">${tax.toFixed(2)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted">Shipping</dt>
              <dd className="font-mono">
                {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
              </dd>
            </div>
            <div className="flex justify-between border-t border-line pt-3 text-base font-semibold">
              <dt>Total</dt>
              <dd className="font-mono">${total.toFixed(2)}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </div>
  );
}
