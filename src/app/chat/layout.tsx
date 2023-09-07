import TiktokMobileHeader from "../components/TiktokMobileHeader";
export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen overflow-y-hidden">
      <TiktokMobileHeader />
      {children}
    </div>
  );
}
