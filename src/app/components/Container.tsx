import React from "react";
import TiktokMobileHeader from "./TiktokMobileHeader";
import TiktokMobileFooter from "./TiktokMobileFooter";

type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className="flex flex-col h-screen bg-white ">
      <TiktokMobileHeader />
      <div className="flex-grow overflow-scroll">{children}</div>
      <TiktokMobileFooter />
    </div>
  );
}
