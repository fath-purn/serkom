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

/**
 * Komponen untuk menampilkan tautan navigasi.
 *
 * @returns {JSX.Element} Komponen tautan navigasi.
 * @author Fatkhurrohman Purnomo / @fath-purn
 * @version 1.0
 * @date 18 Maret 2024
 */
export default function Navlink(): JSX.Element {
  // Mendapatkan path saat ini
  const pathname = usePathname();
  const trimmedPathname = pathname.substring(0, pathname.indexOf("/", 1));

  return (
    <>
      {/* Membuat link untuk setiap navigasi */}
      {links.map((link) => {
        // Menentukan apakah link aktif
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

            {/* Menampilkan indikator aktif */}
            {isActive && (
              <div className="w-[6px] h-[6px] bg-blue-700 rounded-full"></div>
            )}
          </Link>
        );
      })}
    </>
  );
}
