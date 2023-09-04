import React from "react";
import NavbarForAdmin from "../../component/NavbarForAdmin";
import { AiOutlineArrowLeft, AiOutlineQuestionCircle } from "react-icons/ai";
type Props = {};
import { PiSpeakerSimpleHighLight } from "react-icons/pi";
import Leftbar from "./components/Leftbar";
export default function page({}: Props) {
  return (
    <>
      <NavbarForAdmin />
      <div className="bg-gray-100 ">
        <div className="ml-72 mr-72">
          <div className="flex items-center h-20">
            <div className="flexflex-row gap-5">
              <div className="flex items-center">
                <AiOutlineArrowLeft />
                <h1 className="pl-2 font-light">Manage Products</h1>
              </div>
              <h1 className="text-2xl font-bold">Add New Product</h1>
            </div>

            <div className="flex ml-auto gap-2 pt-5">
              <button className="bg-gray-200 px-2 rounded ">
                <AiOutlineQuestionCircle />
              </button>
              <button className="bg-gray-200 py-2 px-4 rounded">
                Save as a draft
              </button>
              <button className="py-2 px-4 rounded bg-emerald-600 text-sm text-white">
                Submit for review
              </button>
            </div>
          </div>

          <div className="flex gap-5 mt-5">
            <Leftbar />
            <div className="bg-white flex flex-col p-2 pl-4 gap-2 rounded-md">
              <div className="flex pt-5 pr-100 items-center ">
                <h1 className=" text-xl font-bold">Basic Information</h1>
              </div>
            </div>
            <div>
              <h1>Preview</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
