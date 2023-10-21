import NavbarForAdmin from "@/component/NavbarForAdmin";
import { CheckCircle } from "lucide-react";
export default function Thankyou() {
  return (
    <>
      <NavbarForAdmin />
      <div className="flex items-center justify-center h-screen w-screen flex-col gap-12 text-center">
        <h1 className="text-8xl font-bold">Thank you</h1>
        <CheckCircle className="text-green-600 w-40 h-40" />

        <p className="font-semibold text-2xl">
          Your product will be displayed in our ecommerce accordingly.
        </p>
      </div>
    </>
  );
}
