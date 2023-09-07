"use client";
import Container from "@/app/components/Container";
import Divider from "@/app/components/Divider";
import React from "react";
import { AiOutlinePlusCircle, AiOutlineArrowRight } from "react-icons/ai";
import AddressCard from "./components/AddressCard";
import { useGlobalContext } from "@/app/contexts/store";
type Props = {};
const addresses = [
  {
    location: "Northpoint Shopping Centre",
    moreAddress: "930, Yishun Avenue 2",
    postalCode: "Singapore 769098",
    isDefault: true,
  },
  {
    location: "ION Orchard",
    moreAddress: "2 Orchard Turn",
    postalCode: "Singapore 238801",
    isDefault: false,
  },
  {
    location: "VivoCity",
    moreAddress: "1 Harbourfront Walk",
    postalCode: "Singapore 098585",
    isDefault: false,
  },
  {
    location: "Marina Bay Sands",
    moreAddress: "10 Bayfront Avenue",
    postalCode: "Singapore 018956",
    isDefault: false,
  },
];

export default function page({}: Props) {
  return (
    <Container navigateString="/groupBuyMainPage/create">
      <div className="m-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <AiOutlinePlusCircle size={30} />
            <h1>Add address</h1>
          </div>
          <AiOutlineArrowRight size={30} />
        </div>
        <div className="my-4">
          <Divider />
        </div>

        <div className="flex flex-col gap-3">
          {addresses.map((address, index) => (
            <AddressCard
              key={index}
              isDefault={address.isDefault}
              location={address.location}
              addressMore={address.moreAddress}
              postcode={address.postalCode}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
