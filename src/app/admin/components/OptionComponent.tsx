import React from "react";
import Textbox from "./Textbox";
import { AiFillDelete } from "react-icons/ai";

type Props = {};

export default function OptionComponent({}: Props) {
  return (
    <div>
      <h1 className="text-xs pb-2"> * Option</h1>
      <div className="flex gap-2 items-center">
        <Textbox placeholder=""  />
        <AiFillDelete className="text-2xl" />
      </div>
    </div>
  );
}
