import React from "react";
import Textbox from "./Textbox";
import { AiFillDelete } from "react-icons/ai";

type Props = {
  index: number;
  setArrOfOptions: any;
};

export default function OptionComponent({index, setArrOfOptions}: Props) {
  const handleChange = (e: any) => {

    setArrOfOptions((prevValue: string[])=> {
      const newArr = [...prevValue]
      newArr[index] = e.target.value
      return newArr
    })
  }
  return (
    <div>
      <h1 className="text-xs pb-2"> * Option</h1>
      <div className="flex gap-2 items-center">
        <Textbox handleUpdate={handleChange} placeholder=""   />
        <AiFillDelete className="text-2xl" />
      </div>
    </div>
  );
}
