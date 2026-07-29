import { getProductById } from "@/data/products";
import { OrderItem, Product } from "@/types";

export const TAX_RATE = 0.07;
export const SHIPPING_FLAT = 4.99;
export const FREE_SHIPPING_THRESHOLD = 75;

export interface OrderLine {
  productId: string;
  product: Product;
  quantity: number;
  lineTotal: number;
}

export function buildOrderLines(
  items: { productId: string; quantity: number }[]
): OrderLine[] {
  return items
    .map((item) => {
      const product = getProductById(item.productId);
      if (!product) return null;
      return {
        productId: item.productId,
        product,
        quantity: item.quantity,
        lineTotal: round2(product.price * item.quantity),
      };
    })
    .filter((line): line is OrderLine => line !== null);
}

export function computeTotals(lines: { lineTotal: number }[]) {
  const subtotal = round2(lines.reduce((sum, l) => sum + l.lineTotal, 0));
  const shipping =
    lines.length === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FLAT;
  const tax = round2(subtotal * TAX_RATE);
  const total = round2(subtotal + tax + shipping);
  return { subtotal, tax, shipping, total };
}

export function toOrderItems(lines: OrderLine[]): OrderItem[] {
  return lines.map((l) => ({
    productId: l.productId,
    name: l.product.name,
    price: l.product.price,
    quantity: l.quantity,
    lineTotal: l.lineTotal,
  }));
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}
