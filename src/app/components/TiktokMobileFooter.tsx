import Image from "next/image";
import React from "react";
import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineInbox,
} from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
type Props = {};

export default function TiktokMobileFooter({}: Props) {
  return (
    <footer className="bg-white text-black flex items-center">
      <div className="flex flex-col flex-grow items-center pt-2 pb-1">
        <AiOutlineHome size={25} />
        <a className="text-sm">Home</a>
      </div>
      <div className="flex flex-col  flex-grow items-center pt-2  pb-1">
        <AiOutlineShopping size={25} />
        <a className="text-sm">Shop</a>
      </div>
      <div className="flex flex-col  flex-grow items-center pt-2  pb-1">
        <Image alt="" width={60} height={40} src="/tiktokFooterLogo.png" />
      </div>
      <div className="flex flex-col  flex-grow items-center pt-2  pb-1 ">
        <AiOutlineInbox size={25} />
        <a className="text-sm">Inbox</a>
      </div>
      <div className="flex flex-col  flex-grow items-center pt-2  pb-1">
        <BsPersonCircle size={25} />
        <a className="text-sm">Profile</a>
      </div>
    </footer>
  );
}
