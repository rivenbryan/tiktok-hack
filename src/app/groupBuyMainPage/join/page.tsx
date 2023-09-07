import Container from "@/app/components/Container";
import React from "react";
import Searchbar from "./components/Searchbar";
import Groupcard from "./components/Groupcard";
import Dropdownbox from "./components/Dropdownbox";

type Props = {};

export default function page({}: Props) {
  return (
    <Container navigateString="/groupBuyMainPage">
      <div className="flex m-5 justify-center items-center ">
        <h1 className="font-bold">Nearby Groups</h1>
        <div className="flex ml-auto justify-center items-center gap-1">
          <h1 className="text-xs">Sort By:</h1>
          <Dropdownbox/>
        </div>
      </div>
      <Searchbar />
      <div className="flex flex-col gap-3 items-center justify-center mt-2">
        <Groupcard />
        <Groupcard />
        <Groupcard />
        <Groupcard />
        <Groupcard />
        <Groupcard />

      </div>
    </Container>
  );
}
