"use client";

import React, { useState } from "react";
import Container from "../components/Container";
import { IoShareOutline } from "react-icons/io5";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

const data = {
  days: 5,
  distance: 10,
  groupleader: "Bryan Tay",
  groupleaderRating: 3.4,
  groupname: "Bryan's Group",
  location: "NUS",
  deadline: "2023-10-10T00:00:00.000Z",
  groupcount: 10,
};

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <div className="fixed w-full h-full bg-black/30 z-10 flex justify-center items-center">
          <div className="w-72 px-5 py-4 bg-white rounded-xl flex flex-col justify-between items-center gap-3">
            <p className="font-bold text-xl text-center">
              Do you wish to join the Group Chat?
            </p>
            <p className="text-gray-400 text-xs text-center">
              Interact with other members to arrange future groupbuys with them
            </p>
            <div className="flex justify-center w-full items-center gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="w-24 h-10 bg-rose-600 text-white font-semibold rounded-xl"
              >
                Join Now
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-24 h-10 bg-white text-rose-600 font-semibold rounded-xl border border-rose-600"
              >
                Opt Out
              </button>
            </div>
          </div>
        </div>
      )}
      <Container navigateString="/">
        <div className="fixed bottom-16 flex justify-center items-center w-full">
          <button
            onClick={() => setIsOpen(true)}
            className="w-80 rounded-xl justify-center flex items-center h-10 bg-rose-600 text-white font-semibold"
          >
            Join Now
          </button>
        </div>
        <div className="w-full flex flex-col items-center gap-4">
          <Image
            src="/product.png"
            width={500}
            height={500}
            alt="pic"
            className="w-full aspect-[10/6] object-cover"
          />
          <div className="w-full flex flex-col items-center gap-4 p-2 pb-20">
            <div className="w-full flex flex-col border border-gray-300 rounded-xl p-3 gap-1">
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold">{data.groupname}</p>
                <IoShareOutline className="text-rose-600" size={25} />
              </div>
              <div className="flex justify-start items-center gap-1">
                <div className="h-6 w-6 bg-blue-200 rounded-full"></div>
                <p className="text-xs">
                  {data.groupleader} +{data.groupcount - 1} other members
                </p>
              </div>
              <div className="flex items-center text-[0.6rem] gap-1">
                <p>Orders will close on</p>
                <p className="font-bold text-rose-600">
                  {new Intl.DateTimeFormat("en-US", {
                    day: "numeric",
                    month: "long",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  }).format(new Date(data.deadline))}
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col border border-gray-300 rounded-xl p-3 gap-1">
              <p className="text-sm font-semibold">Order Details</p>
            </div>
            <div className="w-full flex flex-col border border-gray-300 rounded-xl p-3 gap-1">
              <p className="text-sm font-semibold">Collection Details</p>
              <div className="flex items-center text-[0.6rem] gap-1">
                <p>Items will be delivered to</p>
                <p className="font-bold">{data.location}</p>
                <p className="font-bold text-rose-600">
                  ({data.distance}km away)
                </p>
              </div>
            </div>

            <div className="w-full flex flex-col border border-gray-300 rounded-xl p-3 gap-1">
              <div className="flex w-full justify-between items-center gap-2">
                <p className="text-sm font-semibold">Group Details</p>
                <Link
                  href="/members"
                  className="font-semibold w-28 text-center bg-rose-600 text-white text-xs px-2 py-1 rounded-xl"
                >
                  View members
                </Link>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-start items-center gap-1">
                  <div className="h-6 w-6 bg-blue-200 rounded-full"></div>
                  <p className="text-xs">{data.groupleader}</p>
                  <p className="text-xs font-bold ml-2">
                    {data.groupleaderRating}
                  </p>
                  <AiFillStar size={12} className="text-yellow-500" />
                </div>
                <div className="font-semibold w-28 text-center border-2 border-rose-600 text-rose-600 text-xs px-2 py-1 rounded-xl">
                  Chat to Enquire
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
