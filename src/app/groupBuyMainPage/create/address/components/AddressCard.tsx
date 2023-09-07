"use client";
import Divider from "@/app/components/Divider";
import { useGlobalContext } from "@/app/contexts/store";
import Link from "next/link";
import React from "react";

type Props = {
  isDefault?: boolean;
  location: string;
  addressMore: string;
  postcode: string;
};

export default function AddressCard({
  isDefault,
  location,
  addressMore,
  postcode,
}: Props) {
  const { setAddress } = useGlobalContext();

  const handleClick = () => {
    setAddress(location + ", " + addressMore + ", " + postcode);
  };

  return (
    <div onClick={handleClick}>
      <Link href="/groupBuyMainPage/create">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-s font-bold "> {location}</h1>
            <h1 className="text-xs ">{addressMore}</h1>
            <h1 className="text-xs ">{postcode}</h1>
            {isDefault && (
              <div className="bg-gray-200 w-[19%] mt-2">
                <h1 style={{ fontSize: "0.7rem" }}>Default</h1>
              </div>
            )}
          </div>
          <h1 className="text-rose-600 font-bold">Edit</h1>
        </div>
        <Divider />
      </Link>
    </div>
  );
}
