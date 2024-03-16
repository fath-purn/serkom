"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

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

export default function Navlink() {
  const pathname = usePathname();
  const trimmedPathname = pathname.substring(0, pathname.indexOf("/", 1));
  // const isScreen = useMediaQuery('(max-width:880px)');

  return (
    <>
      {links.map((link) => {
        const isActive =
          pathname === link.href || trimmedPathname === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[70px] grow items-center justify-center gap-1 bg-white p-3 text-sm hover:font-bold md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "text-black font-medium": !isActive,
                "font-bold text-black": isActive,
              }
            )}
          >
            <p className="hidden md:block tracking-wider">{link.name}</p>
              {isActive && (
                <div className="w-[6px] h-[6px] bg-blue-700 rounded-full"></div>
              )}
          </Link>
        );
      })}
    </>
  );
}
