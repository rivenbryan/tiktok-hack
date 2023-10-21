import React from "react";
import Container from "../components/Container";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";

export default function Page() {
  return (
    <Container>
      <div className="flex flex-col h-full w-full items-center gap-4 ">
        <div className="flex w-full border-b border-gray-200 justify-between p-4">
          <div className="flex justify-start items-center gap-3">
            <Image
              src="/profileIcon2.jpeg"
              alt="img"
              width={100}
              height={100}
              className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-col justify-between  items-centerh-full">
              <div className="flex">
                <p className="text-xs font-semibold">SIlentWolf</p>
                <p className="text-xs font-bold ml-2">4.7</p>
                <AiFillStar size={12} className="text-yellow-500" />
              </div>
              <p className="text-xs">Owner</p>
            </div>
          </div>
          <div className="font-semibold border-2 border-rose-600 text-rose-600 text-xs px-2 py-1 rounded-xl flex justify-center items-center">
            Chat to Enquire
          </div>
        </div>

        <div className="flex w-full border-b border-gray-200 justify-between items-center p-4">
          <div className="flex justify-start items-center gap-3">
            <Image
              src="/profileIcon1.jpeg"
              alt="img"
              width={100}
              height={100}
              className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-col justify-between  items-centerh-full">
              <div className="flex">
                <p className="text-xs font-semibold">AndrewHehe</p>
              </div>
              <p className="text-xs">Member</p>
            </div>
          </div>
        </div>
        <div className="flex w-full border-b border-gray-200 justify-between items-center p-4">
          <div className="flex justify-start items-center gap-3">
            <Image
              src="/profileIcon3.jpeg"
              alt="img"
              width={100}
              height={100}
              className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-col justify-between  items-centerh-full">
              <div className="flex">
                <p className="text-xs font-semibold">KristianAuto</p>
              </div>
              <p className="text-xs">Member</p>
            </div>
          </div>
        </div>
        <div className="flex w-full border-b border-gray-200 justify-between items-center p-4">
          <div className="flex justify-start items-center gap-3">
            <Image
              src="/profileIcon4.jpeg"
              alt="img"
              width={100}
              height={100}
              className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-col justify-between  items-centerh-full">
              <div className="flex">
                <p className="text-xs font-semibold">Rafimpossible</p>
              </div>
              <p className="text-xs">Member</p>
            </div>
          </div>
        </div>
        <div className="flex w-full border-b border-gray-200 justify-between items-center p-4">
          <div className="flex justify-start items-center gap-3">
            <Image
              src="/profileIcon5.jpeg"
              alt="img"
              width={100}
              height={100}
              className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-col justify-between  items-centerh-full">
              <div className="flex">
                <p className="text-xs font-semibold">HiHiTzekean</p>
              </div>
              <p className="text-xs">Member</p>
            </div>
          </div>
        </div>
        <div className="flex w-full border-b border-gray-200 justify-between items-center p-4">
          <div className="flex justify-start items-center gap-3">
            <Image
              src="/profileIcon6.jpeg"
              alt="img"
              width={100}
              height={100}
              className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-col justify-between  items-centerh-full">
              <div className="flex">
                <p className="text-xs font-semibold">PengKeat2000</p>
              </div>
              <p className="text-xs">Member</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
