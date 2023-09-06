import React from "react";
import { CgProfile } from "react-icons/cg";
type Props = {};

export default function Groupcard({}: Props) {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-lg w-[22rem] p-2">
      <div className="flex gap-5">
        <div className="flex flex-col items-center justify-between">
          <CgProfile size={30} />
          <p className="text-xs">4.95 / 5</p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xs">400m away</h1>

          <h1 className="text-s">Bryan Team </h1>
          <span className="text-[0.6rem] text-rose-600">@bryanhello</span>
        </div>
        <div className="flex ml-auto flex-col justify-between">
          <h1 className="text-green-400 text-xs"> Close in 7 days</h1>
          <div>
            <span className="text-xs text-rose-600">
              $3.51<a className="text-black">/unit</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
