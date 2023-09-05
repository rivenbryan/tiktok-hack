import React from "react";
import Textbox from "./Textbox";

type Props = {
  isVariationChecked: boolean;
  isGroupBuyChecked: boolean;
};

export default function Table({
  isVariationChecked,
  isGroupBuyChecked,
}: Props) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {isVariationChecked && (
              <th scope="col" className="px-6 py-3">
                Size
              </th>
            )}

            <th scope="col" className="px-6 py-3">
              * Retail Price
            </th>
            {isGroupBuyChecked && (
              <th scope="col" className="px-6 py-3">
                GroupBUY Price
              </th>
            )}
            <th scope="col" className="px-6 py-3">
              * Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Seller SKU
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            {isVariationChecked && (
              <td className="px-6 py-4">
                <div className="flex gap-2 items-center">
                  <h1 className="font-bold">S</h1>
                </div>
              </td>
            )}
            <td className="px-6 py-4">
              <div className="flex gap-2 items-center">
                <a className="font-bold">$</a>
                <Textbox height="1.5rem" />
              </div>
            </td>
            {isGroupBuyChecked && (
              <td className="px-6 py-4">
                <div className="flex gap-2 items-center">
                <a className="font-bold">$</a>
                <Textbox height="1.5rem" />
              </div>
              </td>
            )}
            <td className="px-6 py-4">
              <Textbox height="1.5rem" />
            </td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                <Textbox height="1.5rem" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
