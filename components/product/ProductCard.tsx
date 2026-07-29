import Link from "next/link";
import { ShoppingCart, Star } from "lucide-react";
import { Product } from "@/types";
import { ProductThumb } from "./ProductThumb";

export function ProductCard({ product }: { product: Product }) {
  const outOfStock = product.stock <= 0;

  return (
    <div className="group relative flex flex-col rounded-xl border border-line bg-surface overflow-hidden transition-shadow hover:shadow-lg">
      {/* Stretched link: makes the whole card clickable through to the
          product page. The Add to cart button below sits at a higher
          z-index so it stays independently clickable — no JS involved. */}
      <Link
        href={`/product/${product.id}`}
        aria-label={`View ${product.name}`}
        className="absolute inset-0 z-0 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy focus-visible:outline-offset-2"
      >
        <span className="sr-only">View {product.name}</span>
      </Link>

      <ProductThumb
        image={product.image}
        name={product.name}
        className="aspect-[4/3] w-full"
      />

      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-[11px] uppercase tracking-wide text-muted font-mono">
          {product.category}
        </span>

        <h3 className="font-display text-base leading-snug text-ink group-hover:text-navy-light transition-colors">
          {product.name}
        </h3>

        <p className="text-sm text-muted line-clamp-2">{product.tagline}</p>

        <div className="flex items-center gap-1 text-xs text-muted">
          <Star size={13} fill="#fedc00" color="#171a2b" strokeWidth={1} />
          <span>{product.rating.toFixed(1)}</span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="price-tag font-mono text-lg font-semibold text-ink">
            ${product.price.toFixed(2)}
          </span>
          {outOfStock ? (
            <span className="text-xs font-medium text-danger">Out of stock</span>
          ) : (
            <span className="text-xs text-muted">{product.stock} in stock</span>
          )}
        </div>

        {/* Display only — sits above the stretched link (relative z-10) so
            it remains its own click target, separate from the card link. */}
        <button
          type="button"
          disabled={outOfStock}
          className={`relative z-10 inline-flex items-center justify-center gap-2 rounded-lg text-sm px-3 py-2 font-semibold ${
            outOfStock
              ? "bg-line text-muted cursor-not-allowed"
              : "bg-yellow text-navy hover:bg-yellow-dark"
          }`}
        >
          <ShoppingCart size={16} />
          {outOfStock ? "Unavailable" : "Add to cart"}
        </button>
      </div>
    </div>
  );
}
