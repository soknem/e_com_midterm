import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ShoppingCart, Star } from "lucide-react";
import { products, getProductById } from "@/data/products";
import { ProductThumb } from "@/components/product/ProductThumb";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_NAME } from "@/lib/seo";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Product not found" };

  const imageUrl = `/images/products/${product.image}`;
  const title = `${product.name} \u2014 $${product.price.toFixed(2)}`;

  return {
    title,
    description: product.tagline,
    openGraph: {
      type: "website",
      title: `${title} | ${SITE_NAME}`,
      description: product.tagline,
      images: [{ url: imageUrl, width: 1200, height: 1200, alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description: product.tagline,
      images: [imageUrl],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const outOfStock = product.stock <= 0;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.category,
    image: `/images/products/${product.image}`,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: product.price,
      availability: outOfStock
        ? "https://schema.org/OutOfStock"
        : "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: 24,
    },
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: product.category },
          { label: product.name },
        ]}
      />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <ProductThumb
          image={product.image}
          name={product.name}
          className="aspect-square w-full"
          sizes="(min-width: 768px) 50vw, 100vw"
          priority
        />

        <div className="flex flex-col gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wide text-navy-light">
              {product.category}
            </span>
            <h1 className="mt-1 font-display text-3xl font-semibold text-ink">
              {product.name}
            </h1>
            <p className="mt-2 text-muted">{product.tagline}</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="price-tag font-mono text-2xl font-semibold text-ink">
              ${product.price.toFixed(2)}
            </span>
            <span className="flex items-center gap-1 text-sm text-muted">
              <Star size={14} fill="#fedc00" color="#171a2b" strokeWidth={1} />
              {product.rating.toFixed(1)}
            </span>
            {outOfStock ? (
              <span className="text-sm font-medium text-danger">Out of stock</span>
            ) : null}
          </div>

          <p className="leading-relaxed text-ink/80">{product.description}</p>

          <dl className="grid grid-cols-1 gap-x-6 gap-y-2 border-y border-line py-4 text-sm sm:grid-cols-2">
            {product.specs.map((spec) => (
              <div key={spec.label} className="flex flex-col">
                <dt className="text-xs uppercase tracking-wide text-muted">
                  {spec.label}
                </dt>
                <dd className="text-ink">{spec.value}</dd>
              </div>
            ))}
          </dl>

          {}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-ink">Quantity</span>
              <div className="flex items-center rounded-lg border border-line">
                <button
                  type="button"
                  disabled
                  className="flex h-9 w-9 items-center justify-center text-muted disabled:opacity-40"
                >
                  &minus;
                </button>
                <span className="w-10 text-center font-mono text-sm">1</span>
                <button
                  type="button"
                  disabled
                  className="flex h-9 w-9 items-center justify-center text-muted disabled:opacity-40"
                >
                  +
                </button>
              </div>
              <span className="text-xs text-muted">
                {outOfStock ? "Out of stock" : `${product.stock} available`}
              </span>
            </div>

            <button
              type="button"
              disabled={outOfStock}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-base font-semibold sm:w-auto ${
                outOfStock
                  ? "bg-line text-muted cursor-not-allowed"
                  : "bg-yellow text-navy hover:bg-yellow-dark"
              }`}
            >
              <ShoppingCart size={18} />
              {outOfStock ? "Unavailable" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
