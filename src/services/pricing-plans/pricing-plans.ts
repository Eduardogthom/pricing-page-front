import api from "../api";
import { PricingPlan, PricingPlansResponse } from "./pricing-plans.interface";

export const pricingPlansService = {
  getPricingPlans: async (): Promise<PricingPlansResponse> => {
    const { data } = await api.get("/pricing-plans");
    return data;
  },
};
