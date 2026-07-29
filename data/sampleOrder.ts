import { CustomerInfo } from "@/types";

export const sampleCartItems: { productId: string; quantity: number }[] = [
  { productId: "p01", quantity: 1 },
  { productId: "p10", quantity: 1 },
  { productId: "p14", quantity: 2 },
];

export const sampleCustomer: CustomerInfo = {
  fullName: "Sokneam Pov",
  email: "sokneam.pov@example.com",
  phone: "+855 12 345 678",
  address: "St. 271, House 12",
  city: "Phnom Penh",
  notes: "Leave at the front desk if I'm not in.",
};

export const sampleOrderId = "ORD-20260728-4821";
export const sampleOrderDate = "2026-07-28T09:15:00.000Z";
