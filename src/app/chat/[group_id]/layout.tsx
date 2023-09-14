import TiktokMobileHeader from "../../components/TiktokMobileHeader";
export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-[100svh]">
      <TiktokMobileHeader heading="Chat room" />
      <div className="w-full h-[calc(100svh-50px)]">{children}</div>
    </div>
  );
}
