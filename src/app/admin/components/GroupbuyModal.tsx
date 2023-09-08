import React, { useEffect, useState } from "react";
import DropdownOption from "./DropdownOption";
import Table from "./Table";
import TierDiscountComponent, { GroupBuy } from "./TierDiscountComponent";
import FixedDiscountComponent from "./FixedDiscountComponent";
import Textbox from "./Textbox";
import Divider from "@/app/components/Divider";
import TableGroupBuy from "./TableGroupBuy";
import AdminButton from "./AdminButton";

type Props = {};

export default function GroupbuyModal({}: Props) {
  const [isTierDiscount, setIsTierDiscount] = React.useState<boolean>(true);
  const [groupBuyPrice, setGroupBuyPrice] = useState<GroupBuy[]>([
    { qty: 10, discount: 5 },
    { qty: 20, discount: 7 },
    { qty: 30, discount: 10 },
  ]);

  const [unitPerItem, setUnitPerItem] = useState<number>();
  const [totalQuantity, setTotalQuantity] = useState<number>();
  const [finalPrice, setFinalPrice] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [fixedDiscount, setFixedDiscount] = useState<number>(0);
  const [pricePerUnit, setPricePerUnit] = useState<number>(null);

  console.log(unitPerItem);
  console.log(totalQuantity);
  console.log(groupBuyPrice);

  const handleChangeFixedDiscount = (e: any) => {
    setFixedDiscount(Number(e.target.value));
  };

  const calculateTierDiscount = () => {
    if (!totalQuantity || !unitPerItem) {
      console.log("Total quantity is not defined");
      return;
    }
    console.log("calculate");
    let localDiscount = 0;
    // Sort the array by qty descending
    const sortedArray = groupBuyPrice.sort((a, b) => b.qty - a.qty);
    console.log(sortedArray);

    for (let i = 0; i < sortedArray.length; i++) {
      if (totalQuantity >= sortedArray[i].qty) {
        localDiscount = sortedArray[i].discount;
        setDiscount(localDiscount);
        break;
      }
    }
    console.log("discount is " + localDiscount);
    const finalPrice = unitPerItem * totalQuantity * (1 - localDiscount / 100);
    console.log("finalPrice " + finalPrice);
    setFinalPrice(finalPrice);

    const PricePerUnit = finalPrice / totalQuantity;
    setPricePerUnit(PricePerUnit);
  };
  const calculateFixedDiscount = () => {
    console.log("unitPerItem " + unitPerItem);
    console.log("totalQuantity " + totalQuantity);
    console.log(fixedDiscount);
    if (unitPerItem && totalQuantity && fixedDiscount) {
      const discount = fixedDiscount * totalQuantity;
      setDiscount(discount);
      console.log("discount " + discount);
      console.log("total price " + unitPerItem * totalQuantity);
      const finalPrice = unitPerItem * totalQuantity * ((100 - discount) / 100);
      console.log("finalPrice " + finalPrice);
      setFinalPrice(finalPrice);

      const PricePerUnit = finalPrice / totalQuantity;
      setPricePerUnit(PricePerUnit);
    }
  };
  useEffect(() => {
    // console.log(finalPrice); // log the updated finalPrice here
  }, [finalPrice, discount]);
  const handleCalculate = () => {
    if (isTierDiscount) {
      calculateTierDiscount();
    } else {
      calculateFixedDiscount();
    }
  };
  return (
    <div className="w-[100%]">
      <div className="bg-gray-100 border-none rounded-lg w-90 p-4 mt-4">
        <div className="flex">
          <h1 className="text-xs"> * Group Buy Price</h1>
          <div className="ml-auto flex items-center mb-2">
            <DropdownOption
              isTierDiscount={isTierDiscount}
              setIsTierDiscount={setIsTierDiscount}
              setDiscount={setDiscount}
              setFinalPrice={setFinalPrice}
              setPricePerUnit={setPricePerUnit}
              
            />
          </div>
        </div>

        {isTierDiscount ? (
          <TierDiscountComponent
            setGroupBuyPrice={setGroupBuyPrice}
            groupBuyPrice={groupBuyPrice}
          />
        ) : (
          <FixedDiscountComponent handleChange={handleChangeFixedDiscount} />
        )}
      </div>
      <div className="bg-gray-100 border-none rounded-lg w-full p-4 mt-4">
        <div className="flex flex-col gap-1 mt-5">
          <h1 className="font-bold">Price Calculator</h1>
          <TableGroupBuy
            setTotalQuantity={setTotalQuantity}
            setUnitPerItem={setUnitPerItem}
            isTierDiscount={isTierDiscount}
            fixedDiscount={fixedDiscount}
          />
          <div className="flex flex-col  p-2">
            <div className="flex justify-between items-center">
              <h1 className="text-xm font-bold">Price Per Unit</h1>
              {pricePerUnit == null ? (
                "-"
              ) : (
                <p className="">
                  <span className="line-through mr-2">${unitPerItem}</span>
                  <span className="text-red-600">
                    ${pricePerUnit.toFixed(2)}
                  </span>
                </p>
              )}

              {/* <h1 className=" font-bold text-xm">
                {pricePerUnit == null ? "-" : "$" + pricePerUnit.toFixed(2)}
              </h1> */}
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-x font-bold">
                {isTierDiscount
                  ? "Discount Applied: (Tier Discount)"
                  : "Discount Applied:  (Fixed Discount)"}
              </h1>
              <h1 className="text-xm font-bold ">{discount}%</h1>
            </div>

            <div className="flex justify-between items-center">
              <h1 className="text-xm font-bold">Final Price</h1>
              <h1 className=" font-bold text-xm">
                {finalPrice == null ? "-" : "$" + finalPrice.toFixed(2)}
              </h1>
            </div>

            <div className="flex justify-end items-center mt-2">
              <AdminButton text={"Calculate"} handleClick={handleCalculate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
