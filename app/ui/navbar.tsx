import Navlink from "@/app/ui/navlink";
import { ButtonNavbar } from "@/app/ui/button";
import NavlinkMobile from "@/app/ui/navbar-mobile";

export default function Navbar() {
  return (
    <div className="flex justify-center w-full bg-white fixed md:bottom-auto z-50 shadow-md md:top-0">
      <div className="w-[95%] md:flex md:flex-row md:justify-between">
        <div className="md:flex md:flex-row md:justify-start md:items-center">
          <h1 className="text-black tracking-[0.5rem] font-bold mt-3 md:mt-0 top-2 md:top-0 relative">HAIIIII</h1>
        </div>
        <div className="block md:hidden">
          <NavlinkMobile />
        </div>
        <div className="hidden md:block">
          <div className=" flex flex-row justify-end md:gap-[50px]">
            <Navlink />
            <ButtonNavbar />
          </div>
        </div>
      </div>
    </div>
  );
}
