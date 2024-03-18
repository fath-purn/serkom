"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ButtonNavbar } from "@/app/ui/button";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { useState } from "react";

const links = [
  { name: "Beranda", href: "/" },
  {
    name: "Beasiswa",
    href: "/beasiswa",
  },
  {
    name: "Hasil",
    href: "/hasil",
  },
];

export default function NavlinkMobile() {
  const pathname = usePathname();
  const trimmedPathname = pathname.substring(0, pathname.indexOf("/", 1));
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <div>
      <div className="flex justify-end bottom-[18px] relative">
        <button onClick={() => setMenu(!menu)}>
          <Icon path={mdiMenu} size={1} color="black" className="" />
        </button>
      </div>
      {menu && (
        <div className="flex flex-col items-center py-3">
          {links.map((link) => {
            const isActive =
              pathname === link.href || trimmedPathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "flex md:h-[70px] grow items-center justify-center gap-1 bg-white p-3 text-sm hover:font-bold md:flex-none md:justify-start md:p-2 md:px-3",
                  {
                    "text-black font-medium": !isActive,
                    "font-bold text-black": isActive,
                  }
                )}
                onClick={() => setMenu(!menu)}
              >
                <p className="tracking-wider">{link.name}</p>
                {isActive && (
                  <div className="w-[6px] h-[6px] bg-blue-700 rounded-full"></div>
                )}
              </Link>
            );
          })}
          <ButtonNavbar />
        </div>
      )}
    </div>
  );
}
