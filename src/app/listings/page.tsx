import { Input } from "@/components/ui/input";
import { ShoppingCartIcon, SearchIcon } from "lucide-react";
import TiktokMobileFooter from "../components/TiktokMobileFooter";
import Image from "next/image";
import Link from "next/link";
export default function Listings() {
  return (
    <>
      <div className="w-full h-screen flex flex-col">
        <div className="flex flex-col justify-center items-center bg-gradient-to-br from-rose-600 to-teal-300 py-6">
          <div className="flex flex-row gap-5 justify-start items-center ">
            <div className="flex-grow-1 w-full relative">
              <SearchIcon className="absolute top-[50%] -translate-y-[50%] ml-3" />
              <Input
                className="rounded-xl shadow border-none pl-12 pr-20 bg-white"
                placeholder="judydoll"
              />
              <div className="absolute right-0 top-[50%] -translate-y-[50%] mr-3 text-rose-600 font-bold">
                Search
              </div>
            </div>
            <ShoppingCartIcon className="w-8 h-full" />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="px-2 py-2 border-b-black border-b">All</div>
          <div className="px-2 py-2 border-b">Food</div>
          <div className="px-2 py-2 border-b">Beauty</div>
          <div className="px-2 py-2 border-b">Toys</div>
          <div className="px-2 py-2 border-b">Jewellery</div>
          <div className="px-2 py-2 border-b">Household</div>
        </div>
        <div className="w-6/12 bg-white border rounded-xl">
          <div className="relative">
            <Image
              src="/productNew.jpg"
              width={1000}
              height={100}
              alt="pic"
              className="w-full h-[15rem]"
            />
            <div className="flex-row absolute bottom-0 left-0 mb-3 ml-3 text-white inline-block">
              <Image
                src="/productNew.jpg"
                width={100}
                height={100}
                alt="pic"
                className="w-4 inline-block rounded-full mr-2 border border-white"
              />
              Bryan Tay
            </div>
          </div>

          <div className="px-2 py-2">
            <div className="flex flex-row">
              <h1>
                Plain T-Shirt <span>(NORMAL)</span>
              </h1>
              <Image
                src="/productNew.jpg"
                width={100}
                height={100}
                alt="pic"
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-red-700 font-bold">
              S$<span className="text-2xl">9.90</span>
            </h3>
            <div className="my-2 bg-red-200 inline-block px-2 rounded text-red-700 font-semibold">
              S$3 off
            </div>

            <div className="text-sm opacity-60">
              <Image
                src="/star.png"
                width={100}
                height={100}
                alt="pic"
                className="h-3 w-3 inline-block mr-2 mb-1"
              />
              4.8 | 15.3k sold
            </div>
          </div>
        </div>
        <div className="mt-auto">
          <TiktokMobileFooter />
        </div>
      </div>
    </>
  );
}
