import { pricingPlans } from "../services/pricing-plans/pricing-plans";
import { PricingPlan } from "../services/pricing-plans/pricing-plans.interface";

function Page(data: PricingPlan[]) {
  return <>Oie</>;
}

export async function getServerSideProps() {
  const data = await pricingPlans.getPricingPlans();

  return { props: { data } };
}

export default Page;
