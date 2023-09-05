import React from "react";

type Props = {};

export default function TierDiscountComponent({}: Props) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
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
            <td className="font-bold  px-6 py-4">10</td>
            <td className="px-6 py-4">5%</td>
          </tr>
          <tr className="bg-white border-b ">
            <td className="font-bold px-6 py-4">20</td>
            <td className="px-6 py-4">7%</td>
          </tr>
          <tr className="bg-white border-b ">
            <td className="font-bold px-6 py-4">30</td>
            <td className="px-6 py-4">10%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
