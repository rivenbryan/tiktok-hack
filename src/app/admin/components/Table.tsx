import React from "react";
import RowTable from "./RowTable";

type Props = {
  isVariationChecked: boolean;
  variationSize: string;
  arrOfOptions: string[]
};

export default function Table({
  isVariationChecked,
  variationSize,
  arrOfOptions,
}: Props) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            {isVariationChecked && (
              <th scope="col" className="px-6 py-3">
                {variationSize}
              </th>
            )}

            <th scope="col" className="px-6 py-3">
              * Retail Price (SGD)
            </th>
            <th scope="col" className="px-6 py-3">
              * Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Seller SKU
            </th>
          </tr>
        </thead>
        <tbody>
        {arrOfOptions.map((option, index) => (
          <RowTable option={option} key={index} isVariationChecked={isVariationChecked}/>
        ))}
         
          
        </tbody>
      </table>
    </div>
  );
}
