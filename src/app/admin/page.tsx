import React from "react";
import NavbarForAdmin from "../../component/NavbarForAdmin";
import { AiOutlineArrowLeft, AiOutlineQuestionCircle } from "react-icons/ai";
type Props = {};
import Leftbar from "./components/Leftbar";
import InformationComponent from "./components/InformationComponent";
import Card from "./components/Card";
import Textbox from "./components/Textbox";
import Image from "next/image";
import SalesInformationComponent from "./components/SalesInformationComponent";
import AdminButton from "./components/AdminButton";
import ShippingComponent from "./components/ShippingComponent";
import media_image from "../../../public/media_image.png";
import Link from "next/link";
export default function page({}: Props) {
  return (
    <>
      <NavbarForAdmin />
      <div className="bg-gray-100 flex items-center justify-center w-full px-5 pb-3 border-b border-gray-500 shadow-sm fixed top-14 z-10">
        <div className="flex items-center h-20 w-full justify-between">
          <div className=" gap-5">
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
            <Link href="/thankyou">
              <AdminButton text="Submit for review" />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 flex items-center justify-center mt-36">
        <div className="">
          <div className="flex gap-5 mt-5 pb-5">
            <Leftbar />
            <div className="flex flex-col gap-5">
              <Card name="Basic Information">
                <div>
                  <InformationComponent
                    isStar={true}
                    title="Product Name"
                    description="Recommended length: 25 characters or more. Category will be identified automatically according to the product name."
                  />
                  <Textbox placeholder="" />
                </div>
                <div>
                  <InformationComponent
                    isStar={true}
                    title="Category"
                    description="Some categories are invite-only and can't be selected. To add these categories, click here to submit the: Invite Only Application. Don't upload prohibited or restricted products."
                  />
                  <Textbox placeholder="" />
                </div>
                <div>
                  <InformationComponent
                    isStar={true}
                    title="Brand"
                    description="Products with brand authorization are more likely to be recommended on TikTok Shop. Apply for the brand authorization if your product is qualified. "
                  />
                  <Textbox placeholder="" />
                </div>
              </Card>
              <Card name="Media">
                <div>
                  <InformationComponent
                    isStar={true}
                    title="Product Name"
                    description="Recommended to upload at least 3 images to fully disply your product features and usage scenarios."
                  />
                  <Image className="pt-2" src={media_image} alt=""></Image>
                </div>
              </Card>
              <Card name="Product Details">
                <div>
                  <InformationComponent
                    isStar={true}
                    title="Product description"
                    description="Recommended to provide a description of at least 200 characters long and add images to help customers make purchasing decisions."
                  />
                  <textarea
                    id="message"
                    rows={8}
                    className=" block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300"
                    placeholder="Enter a product description..."
                  ></textarea>
                </div>
              </Card>
              <Card name="Sales Information">
                <SalesInformationComponent />
              </Card>
              <Card name="Shipping">
                <ShippingComponent />
              </Card>
            </div>
            <div className="bg-white flex flex-col p-2 pl-4 gap-2 rounded-md">
              <div className="flex pt-5 pr-36 pl-2 items-center ">
                <h1 className=" text-xl pl-2 font-bold ">Preview</h1>
              </div>
              <div>
                <h1 className="text-zxl font-light pl-14 "> - </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
