export interface PricingPlan {
  id: number;
  name: string;
  price: number;
  planOrder: number;
  features: PlanFeatures[];
  discount: Discount;
}

export interface PlanFeatures {
  id: number;
  feature: string;
  featureOrder: number;
}

export interface Discount {
  id: number;
  discountValue: number;
  discountType: DiscountType;
}

export enum DiscountType {
  ANNUAL = "annual",
  SEMESTER = "semester",
}

export interface PricingPlansResponse {
  items: PricingPlan[];
}
