"use client";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useRouter } from "next/navigation";

type Props = {
  heading?: string;
  navigateURL?: string;
};

export default function TiktokMobileHeader({ heading, navigateURL }: Props) {
  const router = useRouter();
  return (
    <>
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
        <BiDotsHorizontalRounded color="black" size={30} />
      </div>
      <hr className="h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
    </>
  );
}
