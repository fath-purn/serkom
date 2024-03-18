import Image from "next/image";

// Import gambar komponen lokal
import Footer from "@/app/ui/footer";
import Bantuan from "@/app/ui/bantuan";
import Banner from "@/public/img/baner.png";
import JenisBeasiswa from "@/app/ui/jenis-beasiswa";
import CaraDaftar from "@/app/ui/cara-daftar";

/**
 * Halaman utama aplikasi.
 *
 * @returns {JSX.Element} Komponen halaman utama.
 * @description Komponen ini menampilkan halaman utama aplikasi, termasuk judul, banner,
 *              informasi cara daftar, jenis beasiswa, bantuan, dan footer.
 * @author Fatkhurrohman Purnomo / @fath-purn
 * @version 1.0
 * @date 18 Maret 2024
 */
export default function Page(): JSX.Element {
  return (
    <main className="">
      {/* Bagian atas */}
      <div className="flex justify-center">
        <div className="flex flex-row items-center w-[95%] md:w-[80%] md:min-h-[650px] md:max-h-[650px]">
          {/* Judul */}
          <h1 className="text-4xl md:text-8xl text-black w-[50%] font-semibold tracking-wider z-10 top-[50%] md:top-0 relative ">
            Pilihan Beasiswa Mahasiswa
          </h1>

          {/* Banner */}
          <Image
            alt={"banner"}
            src={Banner}
            quality={100}
            fill
            className={`max-h-[250px] md:max-h-[600px] absolute top-0 left-0 object-cover`}
          />
        </div>
      </div>

      {/* Bagian Cara Daftar */}
      <CaraDaftar />

      {/* Bagian Jenis Beasiswa */}
      <div className="flex justify-center mt-[150px]">
        <div className="w-[95%] md:w-[80%]">
          <h2 className="text-4xl md:text-6xl font-semibold text-center">
            Jenis <span className="text-[#1D24CA]">Beasiswa</span>
          </h2>
          <JenisBeasiswa />
        </div>
      </div>

      {/* Bagian Bantuan */}
      <Bantuan />

      {/* Bagian Footer */}
      <Footer />
    </main>
  );
}
