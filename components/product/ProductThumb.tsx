import Image from "next/image";

/**
 * Renders the real product photo from /public/images/products/<image>.
 * `sizes` should roughly match how wide the image renders in the layout
 * that uses it, so Next.js can serve an appropriately sized file.
 */
export function ProductThumb({
  image,
  name,
  className = "",
  sizes = "(min-width: 1024px) 25vw, 50vw",
  priority = false,
}: {
  image: string;
  name: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`pointer-events-none relative overflow-hidden rounded-lg bg-line/40 ${className}`}
    >
      <Image
        src={`/images/products/${image}`}
        alt={name}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
