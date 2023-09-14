import React from "react";
import TiktokMobileHeader from "./TiktokMobileHeader";
import TiktokMobileFooter from "./TiktokMobileFooter";

type Props = {
  children: React.ReactNode;
  navigateString?: string;
};

export default function Container({ children, navigateString }: Props) {
  return (
    <div className="flex flex-col h-[100svh] bg-white ">
      <TiktokMobileHeader navigateURL={navigateString} />
      <div className="flex-grow overflow-scroll">{children}</div>
      <TiktokMobileFooter />
    </div>
  );
}
