import React from "react";
import Container from "../components/Container";
import MapComponent from "./components/GoogleMap";
import GroupBuyBottomComponent from "./GroupBuyBottomComponent";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
type Props = {};

export default function Home({}: Props) {
  return (
    <Container>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      ></meta>
      <div className="flex flex-col">
        <MapComponent />
        <GroupBuyBottomComponent />
      </div>
    </Container>
  );
}
