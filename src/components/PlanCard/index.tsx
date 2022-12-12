import React, { useState } from "react";
import { PricingPlan } from "../../services/pricing-plans/pricing-plans.interface";
import Button from "../Button";

interface PlanCardProps {
  plan: PricingPlan;
  discount: boolean;
}

const PricingPlanCard = ({ plan, discount }: PlanCardProps) => {
  return plan.planOrder === 1 ? (
    <div className="flex px-[20px] flex-col p-5 rounded border-solid border-2 bg-opacity-30 h-[85%] mx-[25px] border-gold bg-perfume w-[20%] shadow-xl justify-between">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl mt-[10%]">{plan.name}</h1>
        {discount && plan.price > 0 ? (
          <div className="flex flex-col items-center">
            <label className="text-1xl leading-none mt-[15px] text-red font-semibold line-through">
              R${plan.price * 12}
            </label>
            <label className="text-[30px] leading-none mb-[5px] font-semibold text-purple-dark">
              R$
              {(plan.price -
                plan.price * (plan.discount.discountValue * 0.01)) *
                12}
            </label>
          </div>
        ) : (
          <label className="text-[30px] my-[25px]">R${plan.price}</label>
        )}
      </div>
      <div>
        {plan.features.map((feature) => {
          return (
            <div key={feature.id} className="flex flex-col">
              <label className="text-[18px] font-semibold">
                {feature.feature}
              </label>
            </div>
          );
        })}
      </div>
      {plan.price > 0 ? (
        <Button name="tryButton" label="Try it now" />
      ) : (
        <Button name="startButton" label="Get started" />
      )}
    </div>
  ) : (
    <div className="flex px-[20px] flex-col p-5 rounded border-solid border-2 h-[75%] mx-[25px]  border-purple-light w-[20%] shadow-xl justify-between">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl mt-[10%]">{plan.name}</h1>
        {discount && plan.price > 0 ? (
          <div className="flex flex-col items-center">
            <label className="text-1xl leading-none mt-[15px] text-red font-semibold line-through">
              R${plan.price * 12}
            </label>
            <label className="text-[30px] leading-none mb-[5px] font-semibold text-purple-dark">
              R$
              {(plan.price -
                plan.price * (plan.discount.discountValue * 0.01)) *
                12}
            </label>
          </div>
        ) : (
          <label className="text-[30px] my-[25px]">R${plan.price}</label>
        )}
      </div>
      <div>
        {plan.features.map((feature) => {
          return (
            <div key={feature.id} className="flex flex-col">
              <label className="text-[18px] font-semibold">
                {feature.feature}
              </label>
            </div>
          );
        })}
      </div>
      {plan.price > 0 ? (
        <Button name="tryButton" label="Try it now" />
      ) : (
        <Button name="startButton" label="Get started" />
      )}
    </div>
  );
};

export default PricingPlanCard;
