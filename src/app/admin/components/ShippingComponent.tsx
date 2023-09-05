import React from "react";
import InformationComponent from "./InformationComponent";
import Textbox from "./Textbox";
import Togglebutton from "./Togglebutton";

type Props = {};

export default function ShippingComponent({}: Props) {
  return (
    <div className="flex flex-col w-full gap-5">
      <div>
        <InformationComponent
          isStar={true}
          title="Weight with Package"
          description=""
        />
        <Textbox placeholder="Enter the product weight in grams" />
      </div>
      <div>
        <InformationComponent
          isStar={true}
          title="Products Dimensions"
          description="Ensure the box weight and dimensions are accurate as they will be used to calculate the shipping fees and shipping method."
        />
        <div className="flex gap-5">
          <Textbox placeholder="Height in cm" />
          <Textbox placeholder="Width in cm" />
          <Textbox placeholder="Length in cm" />
        </div>
      </div>
      <div>
        <InformationComponent
          isStar={true}
          title="Delivery options"
          description=""
        />
        <div className="flex gap-2">
          <div className="flex gap-2 items-center">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className=" w-3 h-3 text-blue-600 bg-gray-100 border-gray-300"
            />
            <label className="text-xs font-medium text-gray-900">
              Default radio
            </label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className=" w-3 h-3 text-blue-600 bg-gray-100 border-gray-300"
            />
            <label className="text-xs font-medium text-gray-900">Custom</label>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xs">Estimated Shipping Fee: --</span>
        <span className="text-xs">
          The shipping fee will be estimated based on product weight and
          dimensions.
        </span>
      </div>
    </div>
  );
}
