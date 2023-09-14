import React from "react";
import Textbox from "./Textbox";

type Props = {
  handleChange1: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange2: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function FixedDiscountComponent({ handleChange1, handleChange2}: Props) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 "></thead>
        <tbody>
          <tr className="bg-white border-b ">
            <td className="px-6 py-4">
              <div className="flex gap-2 items-center">
                Discount % Per Quantity
              </div>
            </td>

            <td className="px-6 py-4">
              <input
                onChange={handleChange1}
                type="text"
                className="border border-gray-300 text-gray-900 rounded-lg w-full block h-6 py-1 "
                placeholder=""
                required
              />
            </td>
          </tr>
          <tr className="bg-white border-b ">
            <td className="px-6 py-4">
              <div className="flex gap-2 items-center">
                Maximum Discount Applicable:
              </div>
            </td>

            <td className="px-6 py-4">
              <input
                onChange={handleChange2}
                defaultValue={100}
                type="text"
                className="border border-gray-300 text-gray-900 rounded-lg w-full block h-6 w-10 py-1 "
                placeholder=""
                required
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
