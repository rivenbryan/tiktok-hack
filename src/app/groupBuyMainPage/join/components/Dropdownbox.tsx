import React from "react";

type Props = {
  handleOptionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedOption: string;
};

export default function Dropdownbox({
  handleOptionChange,
  selectedOption,
}: Props) {
  return (
    <div className=" ">
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleOptionChange}
        className="mt-1 block w-full bg-white text-gray-900 text-xs border outline-rose-600 rounded-lg shadow-sm focus:ring-opacity-50"
      >
        <option value="" className="text-xs">
          
        </option>
        <option value="option1" className="text-xs">
          Distance
        </option>
        <option value="option2" className="text-xs">
          Rating
        </option>
      </select>
    </div>
  );
}
