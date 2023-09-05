import React from "react";
import DropdownOption from "./DropdownOption";
import Table from "./Table";
import TierDiscountComponent from "./TierDiscountComponent";
import FixedDiscountComponent from "./FixedDiscountComponent";

type Props = {};

export default function GroupbuyModal({}: Props) {
    const [isTierDiscount, setIsTierDiscount] = React.useState<boolean>(true);
  return (
    <div className="bg-gray-100 border-none rounded-lg w-90 p-4 mt-4">
      <div className="flex">
        <h1 className="text-xs"> * Group Buy Price</h1>
        <div className="ml-auto flex items-center mb-2">
          <DropdownOption isTierDiscount={isTierDiscount} setIsTierDiscount={setIsTierDiscount}/>
        </div>
      </div>

        {isTierDiscount ? (<TierDiscountComponent/>) : (<FixedDiscountComponent/>)}

    </div>
  );
}
