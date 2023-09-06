import React from "react";
import TiktokMobileFooter from "./TiktokMobileFooter";
import TiktokMobileHeader from "./TiktokMobileHeader";

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
