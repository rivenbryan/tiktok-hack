import React from "react";
import Link from "next/link";
type Props = {
  navigateURL?: string;
};
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
export default function TiktokMobileHeader({navigateURL}: Props) {
  if( navigateURL == undefined){
    navigateURL = "/"
  }
  
  return (
    <>
      <div className="bg-white p-2 flex gap-5">
        <Link href={navigateURL}>
          <AiOutlineArrowLeft color="black" size={30} />
        </Link>

        <div className="ml-auto">
          <BiDotsHorizontalRounded color="black" size={30} />
        </div>
      </div>
      <hr className="h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
    </>
  );
}
