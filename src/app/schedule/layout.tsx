import TiktokMobileHeader from "../components/TiktokMobileHeader";

type Props = {
  children: React.ReactNode;
};
export default function ScheduleLayout({ children }: Props) {
  return (
    <div className="h-screen overflow-y-hidden">
      <TiktokMobileHeader heading="Schedule a Pickup" />
      {children}
    </div>
  );
}
