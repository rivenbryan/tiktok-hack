import React from "react";
import Textbox from "./Textbox";

type Props = {
  isVariationChecked: boolean;
  option: string;
};

export default function RowTable({ isVariationChecked, option }: Props) {
  return (
    <tr className="bg-white border-b ">
      {isVariationChecked && (
        <td className="px-6 py-4">
          <div className="flex gap-2 items-center">
            <h1 className="font-bold">{option}</h1>
          </div>
        </td>
      )}
      <td className="px-6 py-4">
        <div className="flex gap-2 items-center">
          <a className="font-bold">$</a>
          <Textbox height="1.5rem" />
        </div>
      </td>
      <td className="px-6 py-4">
        <Textbox height="1.5rem" />
      </td>
      <td className="px-6 py-4">
        <Textbox height="1.5rem" />
      </td>
    </tr>
  );
}
