import Container from "@/app/components/Container";
import Image from "next/image";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <Container>
      <div className="flex m-5  ">
        <h1 className="font-bold">Start A New Group!</h1>
      </div>
      <div className="flex justify-center">
        <div className="flex w-80 border order-gray-300 rounded-l shadow-lg ">
          <Image src="/product.png" height={70} width={70} alt={""} />
          <div className="flex items-center">
            <h1 className="font-light text-xs pl-2">Plain T-Shirt (Normal)</h1>
          </div>
        </div>
      </div>
    </Container>
  );
}
