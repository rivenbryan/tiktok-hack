import React, { useState } from "react";
import Textbox from "./Textbox";
import AdminButton from "./AdminButton";
import GroupBuyTextbox from "./GroupBuyTextbox";

type Props = {
  groupBuyPrice: GroupBuy[];
  setGroupBuyPrice: React.Dispatch<React.SetStateAction<GroupBuy[]>>;
};

export interface GroupBuy {
  qty: number;
  discount: number;
}
export default function TierDiscountComponent({groupBuyPrice, setGroupBuyPrice}: Props) {
  

  const handleAdd = () => {
    setGroupBuyPrice((prevValue: GroupBuy[]) => {
      const updatedArray = [...prevValue];
      updatedArray.push({ qty: 0, discount: 0 });
      return updatedArray;
    });
  }
 
  return (
    <div className="flex flex-col gap-5">
      <div className=" shadow-md sm:rounded-lg mt-5">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Minimum Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                % Discount
              </th>
            </tr>
          </thead>
          <tbody>
            {groupBuyPrice.map((groupBuy, index) => (
              <tr key={index} className="bg-white border-b ">
                <td className="font-bold  px-6 py-4">
                  <GroupBuyTextbox isQty={true} setGroupBuyPrice={setGroupBuyPrice} value={groupBuy.qty} key={index} indexValue={index} height="1.5rem" />
                </td>
                <td className="px-6 py-4 w-4">
                  <GroupBuyTextbox isQty={false} setGroupBuyPrice={setGroupBuyPrice}  key={index}  value={groupBuy.discount} indexValue={index} height="1.5rem" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex ">
        <AdminButton handleClick={handleAdd} text="Add" />
      </div>
    </div>
  );
}
