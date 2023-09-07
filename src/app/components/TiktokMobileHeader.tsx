import React from "react";

type Props = {
  heading?: string;
};
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
export default function TiktokMobileHeader({ heading }: Props) {
  return (
    <>
      <div className="bg-white p-2 flex gap-5 justify-between items-center">
        <AiOutlineArrowLeft color="black" size={30} />
        {<div className="flex-grow-1 font-bold">{heading}</div>}
        <BiDotsHorizontalRounded color="black" size={30} />
      </div>
      <hr className="h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
    </>
  );
}
