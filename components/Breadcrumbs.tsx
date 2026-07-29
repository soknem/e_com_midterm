import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";

export interface Crumb {
  label: string;
  href?: string;
}

/**
 * Renders "Home / Category / Current page" plus a "Back" link to the
 * previous crumb, so every page (cart, checkout, invoice, product detail)
 * has a way back that isn't just the browser button.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const backHref = [...items].reverse().find((c) => c.href)?.href ?? "/";
  const backLabel =
    [...items].reverse().find((c) => c.href)?.label ?? "Home";

  return (
    <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <ol className="flex flex-wrap items-center gap-1 text-xs text-muted">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1">
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-ink transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-ink font-medium" : ""}>
                  {item.label}
                </span>
              )}
              {!isLast && <ChevronRight size={12} className="text-line" />}
            </li>
          );
        })}
      </ol>

      <Link
        href={backHref}
        className="inline-flex w-fit items-center gap-1.5 text-sm text-muted hover:text-ink"
      >
        <ArrowLeft size={15} />
        Back to {backLabel}
      </Link>
    </div>
  );
}
