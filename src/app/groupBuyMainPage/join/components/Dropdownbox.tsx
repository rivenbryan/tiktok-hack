import React from "react";

type Props = {};

export default function Dropdownbox({}: Props) {
  return (
    <div className=" ">
      <select
        id="dropdown"
        className="mt-1 block w-full bg-white text-gray-900 text-xs border rounded-lg shadow-sm focus:border-blue-300 focus:ring-opacity-50"
      >
        <option value="option1" className="text-xs">Distance</option>
        <option value="option2"  className="text-xs">Rating</option>
      </select>
    </div>
  );
}
