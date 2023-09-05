import Image from "next/image";
import { BsPersonFill } from "react-icons/bs";
import { MdChair } from "react-icons/md";

interface Props {}

function Header(props: Props) {
  const {} = props;

  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex justify-between items-center bg-gray-100 h-10 w-48 bg-opacity-30 rounded-full p-1">
        <div className="flex justify-start items-center gap-1">
          <Image
            src={"/pic.png"}
            width={100}
            height={100}
            className="rounded-full h-8 w-8"
            alt="img"
          />
          <div className="flex flex-col justify-center items-start">
            <p className="text-sm font-bold">Bryan Tay</p>
            <p className="text-xs">2.2k likes</p>
          </div>
        </div>
        <div className="h-8 bg-rose-600 w-16 rounded-full flex justify-center items-center text-xs font-semibold">
          + Follow
        </div>
      </div>
      <div className="flex justify-between items-center gap-2">
        <p className="h-6 w-6 rounded-full bg-gray-100 bg-opacity-30 flex justify-center items-center">
          <MdChair className="text-amber-200" />
        </p>
        <p className="h-6 w-6 rounded-full bg-gray-100 bg-opacity-30 flex justify-center items-center">
          <MdChair className="text-slate-100" />
        </p>
        <div className="gap-1 text-xs bg-gray-100 bg-opacity-30 w-12 rounded-full flex justify-center items-center h-6">
          <BsPersonFill />
          <p>68</p>
        </div>
        <p className="font-semibold text-lg text-white">X</p>
      </div>
    </div>
  );
}

export default Header;
