"use client";

import React, { useState } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineShoppingCart,
  AiFillStar,
  AiOutlineShop,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { RiChatSmile2Line } from "react-icons/ri";
import { BiDotsHorizontalRounded, BiRuler } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { BsBookmark, BsPeopleFill, BsShieldFillCheck } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

interface Props {}

function Page(props: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const {} = props;

  return (
    <div className="flex flex-col h-screen ">
      {isOpen && (
        <div className="h-full w-full flex flex-col fixed top-0 left-0 bg-black bg-opacity-20 justify-end">
          <div
            onClick={() => {
              setIsOpen(false);
            }}
            className="h-[20%] "
          ></div>
          <div className="h-[80%] w-full bg-opacity-100 bg-white p-2 flex flex-col justify-between">
            <div className="flex flex-col gap-3 justify-center items-start w-full">
              <div className="w-full flex justify-between items-start ">
                <div className="flex gap-2">
                  <Image
                    src="/product.png"
                    width={100}
                    height={100}
                    alt="pic"
                    className="rounded-md"
                  />
                  <p className="font-bold text-2xl">$10.00</p>
                </div>
                <p
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  x
                </p>
              </div>
              <span className="bg-gray-200 w-full h-[1px]"></span>
              <div className="flex justify-between items-center bg-gray-100 w-full rounded-full h-7 px-2">
                <div className="flex justify-center items-center gap-1 text-sm text-gray-700">
                  <BiRuler color="gray" size={18} />
                  Size guide
                </div>
                <IoIosArrowForward size={15} color="gray" />
              </div>
              <p className="font-semibold text-gray-500 text-sm">Size</p>
              <div className="flex justify-start items-center gap-2">
                {["S", "M", "L", "XL", "XXL", "XXXL"].map((value) => (
                  <button
                    onClick={() => {
                      setSize(value);
                    }}
                    className={`border-2 px-2 py-1 min-w-[50px] text-center" +
                      ${size === value ? " border-rose-600" : " border-gray"}`}
                    key={value}
                  >
                    {value}
                  </button>
                ))}
              </div>
              <div className="flex w-full justify-between items-center mt-4">
                <p className="font-semibold text-gray-500 text-sm">Quantity</p>
                <div className="flex w-32 border-2 border-gray-200 h-8 rounded-lg justify-evenly items-center">
                  <AiOutlineMinus
                    onClick={() => {
                      if (quantity > 1) {
                        setQuantity(quantity - 1);
                      }
                    }}
                    size={15}
                    color="black"
                  />
                  <p className="border-gray-200 border-x-2 w-10 text-center">
                    {quantity}
                  </p>
                  <AiOutlinePlus
                    onClick={() => {
                      setQuantity(quantity + 1);
                    }}
                    size={15}
                    color="black"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-2">
              <Link
                href="/groupBuyMainPage"
                className="bg-teal-600 w-full h-12 rounded-sm flex justify-center items-center text-white"
              >
                Group buy
              </Link>
              <button className="bg-rose-500 w-full h-12 rounded-sm flex justify-center items-center text-white">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="bg-white p-2 flex gap-5 justify-between">
        <Link href="/listings">
          <AiOutlineArrowLeft color="black" size={30} />
        </Link>
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
        <div className="flex px-4 py-2 flex-col w-full gap-1">
          <p className="font-bold text-2xl">$10.00</p>
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
          <div className="text-xs flex justify-center items-center p-0.5 bg-teal-600 text-white w-40 rounded-md">
            <BsPeopleFill size={20} />
            <p className="font-bold ml-1">Group Buy Supported</p>
          </div>
          <div className="text-xs flex justify-between items-center w-full mt-2">
            <div className="flex justify-start items-center gap-2">
              <BsShieldFillCheck size={15} className="text-yellow-400" />
              <p>Secure payments • Easy Cancellation • Tiktok Shop s...</p>
            </div>
            <IoIosArrowForward size={15} color="gray" />
          </div>
        </div>
        <div className="h-2 bg-gray-100 w-full mt-1"></div>
        <div className="flex w-full justify-center items-center px-4 py-2 gap-4">
          <div className="flex flex-col items-center text-xs">
            <AiOutlineShop className="h-7 w-7" />
            Shop
          </div>
          <div className="flex flex-col items-center text-xs">
            <RiChatSmile2Line className="h-7 w-7" />
            Chat
          </div>
          <button
            onClick={() => {
              setIsOpen(true);
            }}
            className="text-rose-500 w-32 h-12 rounded-sm font-semibold flex justify-center items-center bg-white border-rose-500 border-2"
          >
            Add to cart
          </button>
          <button
            onClick={() => {
              setIsOpen(true);
            }}
            className="bg-rose-500 w-32 h-12 rounded-sm flex justify-center items-center text-white"
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
