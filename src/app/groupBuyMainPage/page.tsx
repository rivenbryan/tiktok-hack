import React from "react";
import Container from "../components/Container";
import MapComponent from "./components/GoogleMap";
import GroupBuyBottomComponent from "./GroupBuyBottomComponent";
import { AiOutlineArrowLeft } from "react-icons/ai";
type Props = {};

export default function page({}: Props) {
  return (
    <Container>
     
      <div className="flex flex-col">
        <MapComponent />
        <GroupBuyBottomComponent />
      </div>
    </Container>
  );
}
