import { TextField } from "@mui/material";
import React, { useState } from "react";
import Textbox from "./Textbox";
import AdminButton from "./AdminButton";

type Props = {};

export default function TierDiscountComponent({}: Props) {
  const [amt, setAmt] = useState<number>(10);
  const [discount, setDiscount] = useState<number>(5);
  const handleUpdate = (e: any)=> {
    setAmt(e.target.value)
  }
  const [check, setCheck] = useState<boolean>(false)

  const handleDiscount = (e: any)=> {
    setDiscount(e.target.value)
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
            <tr className="bg-white border-b ">
              <td className="font-bold  px-6 py-4">
                <Textbox handleUpdate={handleUpdate} value={amt} height="1.5rem" />
              </td>
              <td className="px-6 py-4 w-4">
                <Textbox handleUpdate={handleDiscount} value={discount} height="1.5rem" />
              </td>
            </tr>
            <tr className="bg-white border-b ">
              <td className="font-bold px-6 py-4">
                <Textbox value={20} height="1.5rem" />
              </td>
              <td className="px-6 py-4 ">
                <Textbox value={7} height="1.5rem" />
              </td>
            </tr>
            <tr className="bg-white border-b ">
              <td className="font-bold px-6 py-4">
                <Textbox value={30} height="1.5rem" />
              </td>
              <td className="px-6 py-4">
                <Textbox value={10} height="1.5rem" />
              </td>
            </tr>
           {
            check && ( <tr className="bg-white border-b ">
            <td className="font-bold px-6 py-4">
                <Textbox height="1.5rem" />
              </td>
              <td className="px-6 py-4">
                <Textbox height="1.5rem" />
              </td>
            </tr>)
           }
          </tbody>
        </table>
      </div>
      <div className="flex ">
        <AdminButton handleClick={()=> setCheck(true)} text="Add" />
      </div>
    </div>
  );
}
