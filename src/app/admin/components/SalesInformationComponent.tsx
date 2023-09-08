"use client";
import React from "react";
import Togglebutton from "./Togglebutton";
import VariationsModal from "./VariationsModal";
import Table from "./Table";
import GroupbuyModal from "./GroupbuyModal";

type Props = {};

export default function SalesInformationComponent({}: Props) {
  const [isVariationChecked, setIsVariationChecked] =
    React.useState<boolean>(false);
  const [isGroupBuyChecked, setIsGroupBuyChecked] =
    React.useState<boolean>(false);

  const [variationSize, setVariationSize] = React.useState<string>("");

  const [arrOfOptions, setArrOfOptions] = React.useState<string[]>([""]);
  const handleVariationCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsVariationChecked(!isVariationChecked);
  };

  const handleUpdateVariationName = (e: any) => {
    setVariationSize(e.target.value);
  };

  const handleGroupBuyCheckBoxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsGroupBuyChecked(!isGroupBuyChecked);
  };
  const handleAddButton = () => {
    setArrOfOptions((prevValue: string[]) => {
      return [...prevValue, ""];
    });
  };

  return (
    <div className="w-full ">
      <Togglebutton
        toggleName="Enable Variation"
        isChecked={isVariationChecked}
        handleCheckBoxChange={handleVariationCheckboxChange}
      />
      <h1 className="text-xs py-3">
        You can add variations if this product has options, like size or color.
      </h1>

      {isVariationChecked && (
        <VariationsModal
          arrOfOptions={arrOfOptions}
          handleAddButton={handleAddButton}
          setArrOfOptions={setArrOfOptions}
          handleUpdateVariationName={handleUpdateVariationName}
        />
      )}

      <Togglebutton
        toggleName="Enable Group Buy"
        isChecked={isGroupBuyChecked}
        handleCheckBoxChange={handleGroupBuyCheckBoxChange}
      />

      <Table
        arrOfOptions={arrOfOptions}
        variationSize={variationSize}
        isVariationChecked={isVariationChecked}
      />
      {isGroupBuyChecked && <GroupbuyModal />}
    </div>
  );
}
