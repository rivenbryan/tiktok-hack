import { BsPeopleFill } from "react-icons/bs";
import { BiSolidShoppingBag } from "react-icons/bi";
import { AiFillStar, AiFillGift } from "react-icons/ai";
import { GiRose } from "react-icons/gi";
import { PiShareFat } from "react-icons/pi";

interface Props {}

function Footer(props: Props) {
  const {} = props;

  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex flex-col items-center text-xs">
        <BiSolidShoppingBag className="h-7 w-7 text-orange-400" />
        Shop
      </div>
      <div className="flex flex-col items-center text-xs">
        <AiFillStar className="h-7 w-7 text-yellow-400" />
        Subsc..
      </div>
      <div className="px-2 text-slate-100 flex justify-center items-center bg-black h-9 w-32 bg-opacity-30 rounded-full p-1">
        Add comme...
      </div>
      <div className="flex flex-col items-center text-xs">
        <BsPeopleFill className="h-7 w-7 text-blue-200" />
        Multi-
      </div>
      <div className="flex flex-col items-center text-xs">
        <GiRose className="h-7 w-7 text-rose-600" />
        Rose
      </div>
      <div className="flex flex-col items-center text-xs">
        <AiFillGift className="h-7 w-7 text-pink-400" />
        Gift
      </div>
      <div className="flex flex-col items-center text-xs">
        <PiShareFat className="h-7 w-7 text-white" />
        20
      </div>
    </div>
  );
}

export default Footer;
