import Image from "next/image";
import { Button } from "@/app/ui/button";

// Import gambar lokal
import Banner_5 from "@/public/img/beranda_5.png";
import Banner_6 from "@/public/img/beranda_6.png";

// Array objek beasiswa yang dimiliki
const beasiswa = [
  {
    alt: "Banner_5",
    src: Banner_5,
    judul: "Akademik",
    deskripsi:
      "Beasiswa Akademik yang diberikan bagi mahasiswa yang memiliki kemampuan intelektual, emosional, dan spiritual untuk melanjutkan pendidikan pada jenjang sarjana.",
    class: "bg-[#F9E8C9]",
  },
  {
    alt: "Banner_6",
    src: Banner_6,
    judul: "Non-Akademik",
    deskripsi:
      "Beasiswa Non-Akademik yang diberikan bagi mahasiswa yang memiliki kemampuan dalam bidang Non-Akademik seperti memiliki kreativitas, usaha, mengharumkan nama kampus untuk melanjutkan pendidikan pada jenjang sarjana.",
    class: "bg-[#98ABEE]",
  },
];

/**
 * Komponen untuk menampilkan jenis-jenis beasiswa beserta deskripsi dan tombol untuk mendaftar.
 * 
 * @returns {JSX.Element} Komponen jenis-jenis beasiswa.
 * @author Fatkhurrohman Purnomo / @fath-purn
 * @version 1.0
 * @date 18 Maret 2024
 */
export default function JenisBeasiswa(): JSX.Element {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-[40px]">
      {/* Mapping array beasiswa */}
      {beasiswa.map((item) => (
        <div key={item.judul} className={`flex flex-col ${item.class} p-5 rounded shadow`}>
          
          {/* Gambar beasiswa */}
          <Image
            alt={item.alt}
            src={item.src}
            quality={100}
            className={`max-h-[140px]`}
          />
          
          {/* Judul beasiswa */}
          <h4 className="text-2xl font-medium tracking-wide mt-5 mb-1">
            {item.judul}
          </h4>
          
          {/* Deskripsi beasiswa */}
          <p className="text-base tracking-wide w-[90%]">
            {item.deskripsi}
          </p>
          
          {/* Tombol untuk mendaftar */}
          <div className="relative bottom-0 mt-5">
            <Button nama="Daftar" link="/beasiswa" />
          </div>
        </div>
      ))}
    </div>
  );
}
