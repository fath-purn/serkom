import Navlink from "@/app/ui/navlink";
import { ButtonNavbar } from "@/app/ui/button";
import NavlinkMobile from "@/app/ui/navbar-mobile";
import Link from "next/link";

/**
 * Komponen untuk menampilkan navbar.
 * 
 * @returns {JSX.Element} Komponen navbar.
 * @author Fatkhurrohman Purnomo / @fath-purn
 * @version 1.0
 * @date 18 Maret 2024
 */
export default function Navbar(): JSX.Element {
  return (
    <div className="flex justify-center w-full bg-white fixed md:bottom-auto z-50 shadow-md md:top-0">
      <div className="w-[95%] md:flex md:flex-row md:justify-between">
        <div className="md:flex md:flex-row md:justify-start md:items-center">
          <Link href="/" className="text-black tracking-[0.5rem] font-bold mt-3 md:mt-0 top-2 md:top-0 relative">HAIIIII</Link>
        </div>
        
        {/* Tampilan untuk mode mobile */}
        <div className="block md:hidden">
          <NavlinkMobile />
        </div>
        
        {/* Tampilan untuk mode desktop */}
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
