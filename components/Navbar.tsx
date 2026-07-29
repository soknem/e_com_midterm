import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu } from "lucide-react";

/**
 * Fully static navbar — including the mobile menu. The mobile panel opens
 * via a hidden checkbox + CSS (":checked" / "peer-checked") rather than
 * JavaScript state, so this stays a Server Component with zero client JS.
 */
export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-navy">
      {/* CSS-only mobile menu toggle (no JS). Must be a sibling of the
          dropdown panel below for the peer-checked selector to reach it. */}
      <input
        id="mobile-menu-toggle"
        type="checkbox"
        className="peer sr-only"
        aria-label="Toggle menu"
      />

      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center" aria-label="E-COM home">
          <Image
            src="/logo-lockup-light.svg"
            alt="E-COM"
            width={150}
            height={38}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
          <Link href="/" className="hover:text-white transition-colors">
            Catalog
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/cart"
            className="flex items-center gap-2 rounded-lg bg-yellow px-3 py-2 text-sm font-semibold text-navy hover:bg-yellow-dark transition-colors"
          >
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Cart</span>
          </Link>

          <label
            htmlFor="mobile-menu-toggle"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-white/80 hover:bg-white/10 sm:hidden"
          >
            <Menu size={20} />
          </label>
        </div>
      </div>

      {/* Mobile dropdown panel: collapsed by default, expands when the
          checkbox above is checked. Pure CSS grid-rows trick for a smooth
          height transition without a fixed pixel height. */}
      <div className="grid grid-rows-[0fr] bg-navy-light transition-[grid-template-rows] duration-200 ease-out peer-checked:grid-rows-[1fr] sm:hidden">
        <div className="overflow-hidden">
          <div className="flex flex-col gap-1 px-4 py-3">
            <Link
              href="/"
              className="rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
            >
              Catalog
            </Link>
            <Link
              href="/cart"
              className="rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
            >
              Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
