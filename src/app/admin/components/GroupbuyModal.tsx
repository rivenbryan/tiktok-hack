import React, { useEffect, useState } from "react";
import DropdownOption from "./DropdownOption";
import Table from "./Table";
import TierDiscountComponent, { GroupBuy } from "./TierDiscountComponent";
import FixedDiscountComponent from "./FixedDiscountComponent";
import Textbox from "./Textbox";
import Divider from "@/app/components/Divider";
import TableGroupBuy from "./TableGroupBuy";
import AdminButton from "./AdminButton";
import { max } from "date-fns";

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
  const [maximumDiscountApplicable, setMaximumDiscountApplicable] = useState<number>(100);

  console.log(maximumDiscountApplicable)
  const handleChangeFixedDiscount = (e: any) => {
    setFixedDiscount(Number(e.target.value));
  };

  const handleChangeMaximumDiscountAPplicable = (e: any) => {
    setMaximumDiscountApplicable(Number(e.target.value));
  };

  const calculateTierDiscount = () => {
    console.log("Clicked Calculate")
    console.log(groupBuyPrice)
    console.log("Total Quantity is " + totalQuantity);
    if (!totalQuantity || !unitPerItem) {
      console.log("Total quantity is not defined");
      return;
    }
   
    let localDiscount = 0;
    // Sort the array by qty descending
    const sortedArray = groupBuyPrice.slice().sort((a, b) => b.qty - a.qty);


    for (let i = 0; i < sortedArray.length; i++) {
      console.log("no.  is " + sortedArray[i].qty);
      if (totalQuantity >= sortedArray[i].qty) {

        localDiscount = sortedArray[i].discount;
        setDiscount(localDiscount);
        break;
      }
    }
   
    const finalPrice = unitPerItem * totalQuantity * (1 - localDiscount / 100);

    setFinalPrice(finalPrice);

    const PricePerUnit = finalPrice / totalQuantity;
    setPricePerUnit(PricePerUnit);
  };
  const calculateFixedDiscount = () => {
    console.log("Discount % Per Quantity " + fixedDiscount);
    console.log("Unit Price per item " + unitPerItem);
    console.log("Total Quantity " + totalQuantity);
    console.log("maximumDiscountApplicable " + maximumDiscountApplicable)
    if (unitPerItem && totalQuantity && fixedDiscount) {
      var discount = fixedDiscount * totalQuantity;
      console.log("discount% : " + discount);
      if (discount > maximumDiscountApplicable) {
        setDiscount(maximumDiscountApplicable);

        discount = maximumDiscountApplicable;
      }else{
        setDiscount(discount);
      }
     
      const finalPrice = unitPerItem * totalQuantity * ((100 - discount) / 100);
      
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
          <FixedDiscountComponent handleChange1={handleChangeFixedDiscount} handleChange2={handleChangeMaximumDiscountAPplicable} />
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
