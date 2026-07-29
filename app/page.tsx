import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export default function HomePage() {
  return (
    <div>
      <section className="bg-navy">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <span className="font-mono text-xs uppercase tracking-widest text-yellow">
            15 products &middot; in stock now
          </span>
          <h1 className="mt-3 max-w-xl font-display text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
            Laptops & computer gear,{" "}
            <span className="text-yellow">chosen carefully.</span>
          </h1>
          <p className="mt-4 max-w-lg text-white/70">
            Laptops, desktops, monitors, peripherals, and accessories &mdash;
            a small catalog of gear we&apos;d actually recommend to a
            classmate.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        {categories.map((category) => (
          <section key={category} className="mb-12 last:mb-0">
            <div className="mb-4 flex items-center gap-3">
              <h2 className="font-display text-xl font-semibold text-ink">
                {category}
              </h2>
              <span className="h-px flex-1 bg-line" aria-hidden="true" />
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products
                .filter((p) => p.category === category)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
