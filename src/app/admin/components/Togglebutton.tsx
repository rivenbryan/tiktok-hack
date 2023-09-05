"use client";
import React from "react";
import VariationsModal from "./VariationsModal";

type Props = {
  isChecked: boolean;
  handleCheckBoxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  toggleName: string;
};

export default function Togglebutton({
  isChecked,
  handleCheckBoxChange,
  toggleName,
}: Props) {
  return (
    <>
      <label className="relative inline-flex items-center mt-2 cursor-pointer">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckBoxChange}
          className="sr-only peer"
        />
        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 ">
          {toggleName}
        </span>
      </label>
    </>
  );
}
