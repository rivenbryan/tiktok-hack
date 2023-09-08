import React from "react";
import Textbox from "./Textbox";

type Props = {
  setUnitPerItem: React.Dispatch<React.SetStateAction<number | undefined>>
  setTotalQuantity: React.Dispatch<React.SetStateAction<number | undefined>>
};

export default function TableGroupBuy({setUnitPerItem,  setTotalQuantity}: Props) {
  const handleChangeUnitPerItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUnitPerItem(Number(e.target.value));
  }
  const handleChangeTotalQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTotalQuantity(Number(e.target.value));
  }
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 "></thead>
        <tbody>
          <tr className="bg-white border-b ">
            <td className="px-6 py-4">
              <div className="flex gap-2 items-center">
                Unit Price per item (SGD)
              </div>
            </td>

            <td className="px-6 py-4">
              <Textbox handleUpdate={handleChangeUnitPerItem} height="1.5rem" />
            </td>
          </tr>
          <tr className="bg-white border-b ">
            <td className="px-6 py-4">
              <div className="flex gap-2 items-center">
                Total Quantity (Pcs):
              </div>
            </td>

            <td className="px-6 py-4">
              <Textbox handleUpdate={handleChangeTotalQuantity} height="1.5rem" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
