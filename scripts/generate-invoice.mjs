

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const SITE_NAME = "E-COM";
const TAX_RATE = 0.07;
const SHIPPING_FLAT = 4.99;
const FREE_SHIPPING_THRESHOLD = 75;

const ORDER = {
  orderId: "ORD-20260728-4821",
  createdAt: "2026-07-28T09:15:00.000Z",
  customer: {
    fullName: "Sokneam Pov",
    email: "sokneam.pov@example.com",
    phone: "+855 12 345 678",
    address: "St. 271, House 12",
    city: "Phnom Penh",
    notes: "Leave at the front desk if I'm not in.",
  },
  items: [
    { name: "Meridian 14 Ultrabook", price: 899.0, quantity: 1 },
    { name: "Keystroke 75% Mechanical Keyboard", price: 79.99, quantity: 1 },
    { name: "VoltPack 20,000mAh Power Bank", price: 42.0, quantity: 2 },
  ],
};

function round2(n) {
  return Math.round(n * 100) / 100;
}

function money(n) {
  return `$${n.toFixed(2)}`;
}

function esc(str) {
  return String(str).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]
  );
}

const lines = ORDER.items.map((item) => ({
  ...item,
  lineTotal: round2(item.price * item.quantity),
}));

const subtotal = round2(lines.reduce((sum, l) => sum + l.lineTotal, 0));
const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FLAT;
const tax = round2(subtotal * TAX_RATE);
const total = round2(subtotal + tax + shipping);

const orderDate = new Date(ORDER.createdAt).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const rowsHtml = lines
  .map(
    (l) => `
        <tr>
          <td>${esc(l.name)}</td>
          <td class="num">${money(l.price)}</td>
          <td class="num">${l.quantity}</td>
          <td class="num">${money(l.lineTotal)}</td>
        </tr>`
  )
  .join("");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Invoice ${esc(ORDER.orderId)} — ${SITE_NAME}</title>
<style>
  @media print {
    body { background: #fff !important; }
    .no-print { display: none !important; }
    .sheet { box-shadow: none !important; border: 0 !important; }
  }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    padding: 32px 16px;
    background: #f4f5fa;
    color: #171a2b;
    font-family: -apple-system, "Segoe UI", Roboto, Inter, Arial, sans-serif;
  }
  .sheet {
    max-width: 720px;
    margin: 0 auto;
    background: #ffffff;
    border: 1px solid #e2e4f0;
    border-radius: 12px;
    overflow: hidden;
  }
  .accent-bar { height: 6px; background: #fedc00; }
  .content { padding: 32px; }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 16px;
    border-bottom: 1px solid #e2e4f0;
    padding-bottom: 24px;
  }
  .brand { font-size: 24px; font-weight: 700; margin: 0; }
  .subtitle { margin: 4px 0 0; color: #656c8a; font-size: 14px; }
  .meta { text-align: right; font-size: 14px; }
  .meta .order-id { font-weight: 600; font-family: "Courier New", monospace; margin: 0; }
  .meta .date { color: #656c8a; margin: 4px 0 0; }
  .parties {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-top: 24px;
  }
  .parties h2 {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: #656c8a;
    margin: 0 0 6px;
  }
  .parties p { margin: 2px 0; font-size: 14px; }
  .parties .muted { color: #656c8a; }
  table { width: 100%; border-collapse: collapse; margin-top: 32px; font-size: 14px; }
  thead th {
    text-align: left;
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 0.04em;
    color: #656c8a;
    border-bottom: 1px solid #e2e4f0;
    padding: 8px 0;
    font-weight: 600;
  }
  th.num, td.num { text-align: right; }
  tbody td { padding: 12px 0; border-bottom: 1px solid #eceef7; }
  .totals {
    margin-left: auto;
    margin-top: 24px;
    max-width: 260px;
    font-size: 14px;
  }
  .totals .row { display: flex; justify-content: space-between; padding: 4px 0; }
  .totals .row.total {
    border-top: 1px solid #e2e4f0;
    margin-top: 8px;
    padding-top: 10px;
    font-weight: 700;
    font-size: 16px;
  }
  .totals .muted { color: #656c8a; }
  .footer-note {
    margin-top: 40px;
    text-align: center;
    font-size: 12px;
    color: #656c8a;
  }
  .print-hint {
    max-width: 720px;
    margin: 0 auto 16px;
    text-align: right;
    font-size: 13px;
    color: #656c8a;
  }
</style>
</head>
<body>
  <p class="print-hint no-print">Press Ctrl+P / Cmd+P to print or save as PDF.</p>
  <div class="sheet">
    <div class="accent-bar"></div>
    <div class="content">
      <div class="header">
        <div>
          <p class="brand">${SITE_NAME}</p>
          <p class="subtitle">Invoice / Order Receipt</p>
        </div>
        <div class="meta">
          <p class="order-id">${esc(ORDER.orderId)}</p>
          <p class="date">${esc(orderDate)}</p>
        </div>
      </div>

      <div class="parties">
        <div>
          <h2>Billed to</h2>
          <p>${esc(ORDER.customer.fullName)}</p>
          <p class="muted">${esc(ORDER.customer.email)}</p>
          <p class="muted">${esc(ORDER.customer.phone)}</p>
        </div>
        <div>
          <h2>Ship to</h2>
          <p>${esc(ORDER.customer.address)}</p>
          <p class="muted">${esc(ORDER.customer.city)}</p>
          ${ORDER.customer.notes ? `<p class="muted"><em>Note: ${esc(ORDER.customer.notes)}</em></p>` : ""}
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th class="num">Price</th>
            <th class="num">Qty</th>
            <th class="num">Total</th>
          </tr>
        </thead>
        <tbody>${rowsHtml}
        </tbody>
      </table>

      <div class="totals">
        <div class="row"><span class="muted">Subtotal</span><span>${money(subtotal)}</span></div>
        <div class="row"><span class="muted">Tax</span><span>${money(tax)}</span></div>
        <div class="row"><span class="muted">Shipping</span><span>${shipping === 0 ? "Free" : money(shipping)}</span></div>
        <div class="row total"><span>Total</span><span>${money(total)}</span></div>
      </div>

      <p class="footer-note">
        Thank you for shopping with ${SITE_NAME}. This is a sample invoice generated for a SETEC Institute midterm project.
      </p>
    </div>
  </div>
</body>
</html>
`;

const outDir = `${__dirname}/../public/invoices`;
mkdirSync(outDir, { recursive: true });
const outPath = `${outDir}/${ORDER.orderId}.html`;
writeFileSync(outPath, html, "utf8");
console.log(`Invoice written to ${outPath}`);
