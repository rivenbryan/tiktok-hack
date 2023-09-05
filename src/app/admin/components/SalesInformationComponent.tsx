"use client";
import React from "react";
import InformationComponent from "./InformationComponent";
import Togglebutton from "./Togglebutton";
import VariationsModal from "./VariationsModal";
import Table from "./Table";

type Props = {};

export default function SalesInformationComponent({}: Props) {
  const [isVariationChecked, setIsVariationChecked] =
    React.useState<boolean>(false);
  const [isGroupBuyChecked, setIsGroupBuyChecked] =
    React.useState<boolean>(false);
  const handleVariationCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsVariationChecked(!isVariationChecked);
  };

  const handleGroupBuyCheckBoxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsGroupBuyChecked(!isGroupBuyChecked);
  };
  return (
    <div>
      <Togglebutton
        toggleName="Enable Variation"
        isChecked={isVariationChecked}
        handleCheckBoxChange={handleVariationCheckboxChange}
      />
      <h1 className="text-xs py-3">
        You can add variations if this product has options, like size or color.
      </h1>

      {isVariationChecked && (
        <VariationsModal setIsVariationChecked={setIsVariationChecked} />
      )}
      <Togglebutton
        toggleName="Enable Group Buy"
        isChecked={isGroupBuyChecked}
        handleCheckBoxChange={handleGroupBuyCheckBoxChange}
      />
      <Table isVariationChecked={isVariationChecked} isGroupBuyChecked={isGroupBuyChecked} />
    </div>
  );
}
