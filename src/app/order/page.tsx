import React from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineShoppingCart,
  AiFillStar,
} from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { BsBookmark } from "react-icons/bs";
import Image from "next/image";

interface Props {}

function Page(props: Props) {
  const {} = props;

  return (
    <div className="flex flex-col min-h-screen ">
      <div className="bg-white p-2 flex gap-5 justify-between">
        <AiOutlineArrowLeft color="black" size={30} />
        <div className="flex gap-2">
          <PiShareFat color="black" size={30} />
          <AiOutlineShoppingCart color="black" size={30} />
          <BiDotsHorizontalRounded color="black" size={30} />
        </div>
      </div>
      <hr className="h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
      <div className="flex flex-col justify-start items-start w-full">
        <Image
          src="/product.png"
          width={100}
          height={100}
          alt="pic"
          className="w-full"
        />
        <div className="flex px-4 pt-1 flex-col w-full gap-1">
          <p className="font-bold text-2xl">$9.00</p>
          <div className="flex justify-between items-center w-full mt-1">
            <p>Plain T-Shirt (NORMAL)</p>
            <BsBookmark color="black" size={20} />
          </div>
          <div className="text-xs flex justify-start items-center w-full">
            <AiFillStar className="text-yellow-400" size={13} />
            <p className="font-bold ml-1">4.7/5</p>
            <p className="ml-1 font-semibold text-blue-400">(252)</p>
            <p className="font-bold ml-2">1389</p>
            <p className="ml-1 font-semibold text-gray-400">sold</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
