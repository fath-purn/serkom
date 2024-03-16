// 'use client'

import Navlink from "@/app/ui/navlink";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import {ButtonNavbar} from "@/app/ui/button";

export default function Navbar() {
  // const isScreenAbove768px = useMediaQuery('(min-width:881px)');

  return (
    <div className="flex justify-center w-full bg-white fixed bottom-0 md:bottom-auto z-50 shadow-md md:top-0">
      <div className="w-full md:w-[95%] md:flex md:flex-row md:justify-between">
        <div className="flex flex-row justify-start items-center">
          <h1 className="text-black tracking-[0.5rem] font-bold ">HAIIIII</h1>
        </div>
        <div className="flex flex-row justify-end md:gap-[50px]">
          <Navlink />
          <ButtonNavbar />
        </div>
      </div>
    </div>
  );
}
