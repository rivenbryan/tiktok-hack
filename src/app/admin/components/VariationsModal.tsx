import React, { useState } from "react";
import Textbox from "./Textbox";
import { AiFillDelete } from "react-icons/ai";
import OptionComponent from "./OptionComponent";
import AdminButton from "./AdminButton";

type Props = {
  handleUpdateVariationName: any;
  arrOfOptions: string[];
  setArrOfOptions: (arr: string[]) => void;
  handleAddButton: () => void;
};

export default function VariationsModal({
  handleUpdateVariationName,
  arrOfOptions,
  handleAddButton,
  setArrOfOptions,
}: Props) {
 
  return (
    <div className="bg-gray-100 border-none rounded-lg w-90 p-4 mt-2">
      <div className="flex">
        <h1 className="text-xs"> * Variation Name</h1>
        <div className="ml-auto flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ml-2 text-xs text-gray-900 ">Add Image</label>
        </div>
      </div>
      <Textbox
        handleUpdate={handleUpdateVariationName}
        placeholder="size"
      />
      <div className="flex flex-col gap-5 mt-5 ">
        {arrOfOptions.map((option, index) => (
          <OptionComponent setArrOfOptions={setArrOfOptions} key={index} index={index}/>
        ))}
      </div>
      <div className="flex gap-2 mt-5">
        <AdminButton handleClick={handleAddButton} text="Add" />
      </div>
    </div>
  );
}
