import React from "react";
import { GroupBuy } from "./TierDiscountComponent";

type Props = {
  height: string;
  value: number;
  indexValue: number;
  setGroupBuyPrice: React.Dispatch<React.SetStateAction<GroupBuy[]>>;
  isQty: boolean;
};

export default function GroupBuyTextbox({
  isQty,
  value,
  indexValue,
  setGroupBuyPrice,
}: Props) {
  const [localValue, setLocalValue] = React.useState<any>(value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalValue(e.target.value);
    setGroupBuyPrice((prevValue: GroupBuy[]) => {
      console.log("indexValue" + indexValue);
      const updatedArray = [...prevValue];

      const { qty, discount } = updatedArray[indexValue];

      if (isQty) {
     
        updatedArray[indexValue] = {
          qty: Number(newValue),
          discount: discount,
        };

      } else {
        updatedArray[indexValue] = { qty: qty, discount: Number(newValue) };
      }
      
      return updatedArray;
    });
  };
  return (
    <input
      type="text"
      id="first_name"
      onChange={handleChange}
      value={localValue}
      style={{ height: "1.5rem" }}
      className="border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
      required
    />
  );
}
