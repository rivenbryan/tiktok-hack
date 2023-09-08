"use client";

import Textbox from "@/app/admin/components/Textbox";
import Container from "@/app/components/Container";
import Image from "next/image";
import Link from "next/link";
import { createContext, useContext, useState } from "react";
import { GrCircleInformation } from "react-icons/gr";
import { AiOutlineCheckCircle } from "react-icons/ai";

import { useGlobalContext } from "@/app/contexts/store";
import DatePicker from "../components/Datepicker";
import { supabase } from "@/lib/db";
type Props = {};
export default function Home({}: Props) {
  const { address, groupName, setGroupName, quantity } = useGlobalContext();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>("");

  console.log(groupName);
  const handleGroupNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGroupName(event.target.value);
  };

  const handleClickPayment = async () => {
    const obj: any = {
      "Northpoint Shopping Centre": 500,
      "ION Orchard": 1200,
      VivoCity: 900,
      "Marina Bay Sands": 2000,
    };
    const { data, error } = await supabase
      .from("group")
      .insert([
        {
          groupname: groupName,
          location: address,
          deadline: selectedDate,
          groupleader: "Bryan",
          groupleaderRating: 0,
          distance: obj[address],
        },
      ])
      .select();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed w-full h-full bg-black/30 z-10 flex justify-center items-center">
          <div className="rounded-xl justify-center flex flex-col items-center  bg-white text-xs px-4 py-4 gap-2 font-semibold">
            <div className="flex justify-center items-center gap-2">
              <AiOutlineCheckCircle className="text-rose-600" size={20} />
              Your $38.10 will be held until the deadline is met
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className="py-2 px-4 bg-rose-600 font-bold text-white rounded-lg"
            >
              Ok
            </button>
          </div>
        </div>
      )}
      <Container navigateString="/groupBuyMainPage">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-5 ml-4 m-5">
            <h1 className="font-bold">Start A New Group!</h1>
            <div className="flex   border order-gray-300 rounded-l shadow-lg ">
              <Image src="/product.png" height={70} width={70} alt={""} />
              <div className="flex items-center">
                <h1 className="font-light text-xs pl-2">
                  Plain T-Shirt (Normal)
                </h1>
              </div>
            </div>
            <div className=" ">
              <h1 className="mb-1 ">Group Name </h1>
              <input
                onChange={handleGroupNameChange}
                type="text"
                id="first_name"
                style={{ height: "1.5rem" }}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg outline-rose-600 block w-full p-2.5 "
                placeholder={"Enter your group name.."}
                required
              />
            </div>

            <div className="flex  justify-between items-center">
              <div className="flex flex-col text-xs">
                <h1 className="mb-1 ">Pick up Location</h1>
                <h1 className="font-bold">
                  {address === "" ? "No address selected" : address}
                </h1>
              </div>
              <Link href="/groupBuyMainPage/create/address">
                <h1 className="text-rose-600 text-xs font-bold">Change</h1>
              </Link>
            </div>

            <div className="flex justify-between items-center">
              <h1 className="text-rose-600 text-xs">
                Add a deadline for this campaign{" "}
              </h1>
              <GrCircleInformation size={15} />
            </div>
            <div>
              <DatePicker
                setSelectedDate={setSelectedDate}
                selectedDate={selectedDate}
              />
            </div>
          </div>
          <div className="flex justify-between mt-auto ml-4 m-5">
            <div className="flex flex-col ">
              <h1 className="text-rose-600 font-bold">$38.1</h1>
              <h1 className="text-xs">Total before shipping</h1>
            </div>
            <button
              onClick={() => {
                handleClickPayment();
                setIsOpen(true);
              }}
              className="bg-red-500 hover:bg-rose-600 text-white font-bold py-2 px-8 text-xs rounded"
            >
              Go to payment
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}
