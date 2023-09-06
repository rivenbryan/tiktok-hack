import Header from "./header";
import Footer from "./footer";
import Image from "next/image";
import { MdLocationPin } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";

interface Props {}

function Page(props: Props) {
  const {} = props;

  return (
    <>
      <video
        src="/video.mp4"
        className="w-full fixed top-0 left-0 z-[-1]"
        autoPlay
        playsInline
        muted
        loop
      ></video>
      <div className="w-full h-full flex flex-col justify-between items-center pt-5 pb-1 px-2 bg-gradient-to-b from-transparent to-black/30">
        <Header />
        <div className="flex flex-col w-full gap-2">
          <div className="bg-orange-500 w-20 font-bold flex justify-center items-center rounded-full">
            HOT!
          </div>
          <div className="h-24 bg-white rounded-lg p-2 flex justify-between items-center">
            <div className="flex justify-start items-center gap-1 h-full">
              <Image
                src="/product.png"
                width={100}
                height={100}
                alt="pic"
                className="h-20 w-20"
              />
              <div className="flex flex-col h-full w-60 justify-between">
                <p className="text-black font-bold">PLAIN T-SHIRT [PINK]</p>
                <div className="flex justify-start items-center">
                  <div className="bg-blue-400 rounded-md p-0.5 text-xs">
                    Groupbuy
                  </div>
                  <MdLocationPin className="ml-1 text-green-800" />
                  <p className="text-green-800 text-xs font-semibold">Yishun</p>
                  <div className="ml-1 flex items-center gap-1">
                    <HiUserGroup className=" text-red-500 h-3 w-3" />
                    <p className="text-red-500 text-xs font-semibold">50</p>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-1">
                  <p className="text-rose-500 font-bold text-lg">$9.00</p>
                  <p className="text-gray-500 font-bold text-lg line-through">
                    $10.00
                  </p>
                  <div className="bg-orange-500 w-12 text-xs text-center font-bold flex justify-center items-center rounded-full">
                    Save $1.00
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center h-full">
              <p className="text-gray-500 text-right w-20">x</p>
              <div className="bg-rose-500 w-20 h-7 rounded-md flex justify-center items-center">
                Join GB
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Page;
