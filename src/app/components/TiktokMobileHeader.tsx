"use client";
import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { Switch } from "@/components/ui/switch";

type Props = {
  heading?: string;
  navigateURL?: string;
};

export default function TiktokMobileHeader({ heading, navigateURL }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <div
        className={`gap-3 p-2 flex flex-col items-center fixed top-7 right-2 w-32 bg-rose-600 shadow rounded-lg z-10 text-white font-bold ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex w-full justify-between items-center">
          <p className="text-sm">Rollover</p>
          <Switch className="bg-white " defaultChecked />
        </div>
        <button className="text-sm bg-white text-rose-600 px-1 rounded-md w-full">
          Leave group
        </button>
      </div>
      <div className="bg-white p-2 flex gap-5 justify-between items-center">
        <div
          onClick={() => {
            if (navigateURL === undefined) {
              router.back();
            } else {
              router.push(navigateURL);
            }
          }}
        >
          <AiOutlineArrowLeft color="black" size={30} />
        </div>
        {<div className="flex-grow-1 font-bold">{heading}</div>}
        <BiDotsHorizontalRounded
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          color="black"
          size={30}
        />
      </div>
      <hr className="h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
    </>
  );
}
