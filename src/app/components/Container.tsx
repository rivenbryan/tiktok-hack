import React from "react";
import TiktokMobileFooter from "./TiktokMobileFooter";

type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{children}</div>
      <TiktokMobileFooter />
    </div>
  );
}
