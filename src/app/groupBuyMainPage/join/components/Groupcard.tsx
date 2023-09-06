import React from "react";
import { CgProfile } from "react-icons/cg";
type Props = {};

export default function Groupcard({}: Props) {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-lg w-[22rem] p-2">
      <div className="flex gap-2 ">
        <CgProfile size={30} />
        <div className="flex flex-col">
          <h1 className="text-xs">400m away</h1>
          <h1 className="text-s font-bold">Bryan's Team </h1>
          <div>
            <span className="text-xs text-red-600">
              $3.51<a className="text-black">/unit</a>
            </span>
          </div>
        </div>
        <div className="flex ml-auto flex-col justify-between">
          <h1 className="text-green-400 text-xs"> Close in 7 days</h1>
          <button className="bg-red-500 text-white text-sm px-2 py-1 rounded">
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
}
