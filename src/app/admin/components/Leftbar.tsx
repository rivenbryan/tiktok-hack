import React from "react";
import { PiSpeakerSimpleHighLight } from "react-icons/pi";

type Props = {};

export default function Leftbar({}: Props) {
  return (
    <div className="bg-white flex flex-col p-2 pl-4 gap-2 rounded-md">
      <div className="flex pt-5 pr-36 pl-2 items-center ">
        <PiSpeakerSimpleHighLight />
        <h1 className=" text-xl pl-2 font-bold ">Suggestions</h1>
      </div>
      <div>
        <h1 className="text-zxl font-light pl-2 ">Complete product </h1>
        <h1 className="text-zxl font-light pl-2 ">information can help</h1>
        <h1 className="text-zxl font-light pl-2">increase your product</h1>
        <h1 className="text-zxl font-light pl-2 ">exposure</h1>
      </div>
      <button className="text-left text-lg pr-5 pb-2 pt-2 pl-2 hover:bg-gray-200">
        Basic Information
      </button>
      <button className="text-left text-lg  pr-5 pb-2 pt-2 pl-2 hover:bg-gray-200">
        Media
      </button>
      <button className="text-left text-lg pr-5 pb-2 pt-2  pl-2 hover:bg-gray-200">
        Product Details
      </button>
      <button className="text-left text-lg pr-5 pb-2 pt-2  pl-2 hover:bg-gray-200">
        Sales Information
      </button>
      <button className="text-left text-lg pr-5 pb-2 pt-2 pl-2 hover:bg-gray-200">
        Shipping
      </button>
    </div>
  );
}
