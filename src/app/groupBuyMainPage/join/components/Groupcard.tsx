import React from "react";
import { CgProfile } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
type Props = {
  groupname: string;
  location: string;
  deadline: string;
  groupleader: string;
  groupleaderRating: number;
  distance: number;
  days: number;
  profileLink: string;
};

export default function Groupcard({
  groupname,
  location,
  deadline,
  groupleader,
  groupleaderRating,
  distance,
  days,
  profileLink,
}: Props) {
  console.log(profileLink);
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-lg w-[22rem] p-2 mb-1">
      <div className="flex gap-5">
        <div className="flex flex-col items-center gap-1 justify-between">
          {/* <CgProfile size={40} /> */}
          <Image src={profileLink} alt="" height={50} width={40}></Image>
          <div className="flex gap-1">
            <p className="text-xs">{groupleaderRating} </p>
            <AiFillStar />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xs">{distance}m away</h1>

          <h1 className="text-xs font-semibold">{groupname}</h1>
          <span className="text-[0.6rem] text-rose-600">@{groupleader}</span>
        </div>
        <div className="flex ml-auto flex-col justify-between">
          <h1
            className={`text-xs font-bold ${
              days < 5 ? "text-rose-600" : "text-green-500"
            }`}
          >
            Close in {days} days
          </h1>
          <div>
            <span className="text-xs text-rose-600">
              $3.51<a className="text-black">/unit</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
