import { useEffect, useState } from "react";
import Button from "../components/Button";
import { pricingPlansService } from "../services/pricing-plans/pricing-plans";
import {
  PricingPlan,
  PricingPlansResponse,
} from "../services/pricing-plans/pricing-plans.interface";
import Switch from "react-switch";
import PricingPlanCard from "../components/PlanCard";

interface PricingPlansScreenProps {
  data: PricingPlan[];
}

const Page = ({ data }: PricingPlansScreenProps) => {
  if (!data) return;

  const [isAnnual, setIsanual] = useState(false);
  const [sortedPlans, setSortedPlans] = useState<PricingPlan[]>();

  const sortPricingPlans = () => {
    if (data.length % 2) {
      let filteredArray: PricingPlan[] = [];
      if (data.find((plan) => plan.planOrder === 1)) {
        //Setting the best plan in the middle
        filteredArray = data.filter((plan) => plan.planOrder !== 1);
        let positionToBeInserted = (data.length - 1) / 2;
        let bestPlanIndex = data.findIndex((plan) => plan.planOrder === 1);
        filteredArray.splice(positionToBeInserted, 0, data[bestPlanIndex]);
      }
      if (data.find((plan) => plan.price === 0)) {
        //Setting the free plan in the beggining
        filteredArray = data.filter((plan) => plan.price !== 0);
        let freePlanIndex = data.findIndex((plan) => plan.price === 0);
        filteredArray.splice(0, 0, data[freePlanIndex]);
      }
      setSortedPlans(filteredArray);
    } else {
      //In the case of an even length i'm putting the free one first and than the "Best plan" second
      let filteredArray: PricingPlan[] = [];
      if (data.find((plan) => plan.planOrder === 1)) {
        filteredArray = data.filter((plan) => plan.planOrder !== 1);
        let bestPlanIndex = data.findIndex((plan) => plan.planOrder === 1);
        filteredArray.splice(1, 0, data[bestPlanIndex]);
      }
      if (data.find((plan) => plan.price === 0)) {
        filteredArray = data.filter((plan) => plan.price !== 0);
        let freePlanIndex = data.findIndex((plan) => plan.price === 0);
        filteredArray.splice(0, 0, data[freePlanIndex]);
      }

      setSortedPlans(filteredArray);
    }
  };

  useEffect(() => {
    sortPricingPlans();
  }, []);

  return (
    <div className="flex w-full bg-white p-3 flex-col h-screen">
      <div className="px-5 pt-5">
        <label className="mb-1 text-justify text-xl leading-tight text-purple-light">
          Pricing
        </label>
        <h1 className="text-justify text-3xl leading-tigh text-purple-dark font-bold">
          Try it now for Free
        </h1>
      </div>
      <div className="flex w-full justify-center items-center">
        <label className="text-2xl text-purple-light font-semibold">
          Monthly
        </label>
        <Switch
          onChange={() => setIsanual(!isAnnual)}
          checked={isAnnual}
          className="px-6"
          onColor="#bf69c2"
          onHandleColor="#ccacdb"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
        />
        <div className="flex flex-col">
          <label className="text-2xl text-purple-light font-semibold leading-none mt-[20px]">
            Annually
          </label>
          <label className="text-red">
            {data.find((plan) => plan.planOrder === 1)?.discount.discountValue}%
            discount
          </label>
        </div>
      </div>
      <div className="flex mt-[20px] h-full items-center justify-center">
        {sortedPlans &&
          sortedPlans.map((plan) => {
            return (
              <PricingPlanCard plan={plan} discount={isAnnual} key={plan.id} />
            );
          })}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const data = await pricingPlansService.getPricingPlans();
  return { props: { data } };
}

export default Page;
