import api from "../api";
import { PricingPlan } from "./pricing-plans.interface";

export const pricingPlans = {
  getPricingPlans: async (): Promise<PricingPlan[]> => {
    const { data } = await api.get("/pricing-plans");
    return data;
  },
};
