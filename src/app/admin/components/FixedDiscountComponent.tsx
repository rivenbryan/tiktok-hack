import React from "react";
import Textbox from "./Textbox";

type Props = {};

export default function FixedDiscountComponent({}: Props) {
  return (
    <div className="flex gap-5 items-center">
      <input
        type="text"
        className="border border-gray-300 text-gray-900 rounded-lg block w-20 py-1 px-2.5"
        placeholder="%"
        required
      />
      <h1 className="text-xs">per quantity</h1>
    </div>
  );
}
