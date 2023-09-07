import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
type Props = {};

export default function GroupBuyBottomComponent({}: Props) {
  return (
    <div className="bg-white justify-center text-black min-h-[215px] flex flex-col items-center gap-5">
      <button className="bg-red-500 text-white rounded-xl text-left px-16 py-5 ">
        <div className="flex justify-center items-center">
          <Link href={"/groupBuyMainPage/join"}>
            <div className="flex flex-col ">
              <p className="font-bold">Join Other Groups</p>

              <p className="text-xs font-light">
                Discover Nearby Groups over here!
              </p>
            </div>
          </Link>
          <div className="ml-auto">
            <AiOutlineArrowRight size={25} />
          </div>
        </div>
      </button>
      <button className="bg-white text-red-500 border-2 border-red-500 rounded-xl text-left px-16 py-5">
        <div className="flex justify-center items-center">
          <Link href={"/groupBuyMainPage/create"}>
            <div className="flex flex-col">
              <p className="font-bold">Create New Group</p>
              <p className="text-xs font-medium">
                Cant find a group? Create one!
              </p>
            </div>
          </Link>
          <div className="ml-auto">
            <AiOutlineArrowRight size={25} className="text-red-500" />
          </div>
        </div>
      </button>
    </div>
  );
}
