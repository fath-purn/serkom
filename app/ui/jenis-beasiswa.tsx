import Image from "next/image";
import { Button } from "@/app/ui/button";

// import local
import Banner_5 from "@/public/img/beranda_5.png";
import Banner_6 from "@/public/img/beranda_6.png";

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
      "Beasiswa Non-Akademik yang diberikan bagi mahasiswa yangmemiliki kemampuan dalam bidang Non-Akademik seperti memilikikreativitas, usaha, mengharumkan nama kampus untuk melanjutkanpendidikan pada jenjang sarjana.",
    class: "bg-[#98ABEE]",
  },
];

export default function JenisBeasiswa() {
  return (
    <div className="grid grid-cols-2 gap-3 mt-[40px]">
      {beasiswa.map((item) => (
        <div key={item.judul} className={`flex flex-col ${item.class} p-5 rounded shadow`}>
          <Image
            alt={item.alt}
            src={item.src}
            quality={100}
            className={`max-h-[140px]`}
          />
          <h4 className="text-2xl font-medium tracking-wide mt-5 mb-1">
            {item.judul}
          </h4>
          <p className="text-base tracking-wide w-[90%]">
            {item.deskripsi}
          </p>
          <div className="relative bottom-0 mt-5">
            <Button nama="Daftar" link="/beasiswa" />
          </div>
        </div>
      ))}
    </div>
  );
}
