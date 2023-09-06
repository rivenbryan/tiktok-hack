import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
type Props = {};

export default function GroupBuyBottomComponent({}: Props) {
  return (
    <div className="bg-white justify-center text-black min-h-[215px] flex flex-col items-center gap-5">
      <button className="bg-red-500 text-white rounded-xl text-left px-16 py-5 ">
        <div className="flex justify-center items-center">
          <div className="flex flex-col ">
            <a className="font-bold">Join Existing Group</a>
            <a className="text-xs font-light">
              Discover Nearby Groups over here!
            </a>
          </div>
          <div className="ml-auto">
            <AiOutlineArrowRight size={25} />
          </div>
        </div>
      </button>
      <button className="bg-white text-red-500 border-2 border-red-500 rounded-xl text-left px-16 py-5">
        <div className="flex justify-center items-center">
          <div className="flex flex-col">
            <a className="font-bold">Create New Group</a>
            <a className="text-xs font-medium">
              Can't find a group? Create one!
            </a>
          </div>
          <div className="ml-auto">
            <AiOutlineArrowRight size={25} className="text-red-500" />
          </div>
        </div>
      </button>
    </div>
  );
}
