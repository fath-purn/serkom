import Image from "next/image";

// import local
import Footer from "@/app/ui/footer";
import Bantuan from "@/app/ui/bantuan";
import Banner from "@/public/img/baner.png";
import JenisBeasiswa from "@/app/ui/jenis-beasiswa";
import CaraDaftar from "@/app/ui/cara-daftar";

export default function Page() {
  return (
    <main className="">
      {/* top */}
      <div className="flex justify-center">
        <div className="flex flex-row items-center w-[80%] md:min-h-[650px] md:max-h-[650px]">
          <h1 className="text-8xl text-black w-[50%] font-semibold tracking-wider z-10">
            Pilihan Beasiswa Mahasiswa
          </h1>
          <Image
            alt={"banner"}
            src={Banner}
            quality={100}
            fill
            className={`max-h-[600px] absolute top-0 left-0`}
          />
        </div>
      </div>

      {/* Cara Daftar */}
      <CaraDaftar />

      {/* Jenis Beasiswa */}
      <div className="flex justify-center mt-[150px]">
        <div className="w-[80%]">
          <h2 className="text-6xl font-semibold text-center">
            Jenis <span className="text-[#1D24CA]">Beasiswa</span>
          </h2>
          <JenisBeasiswa />
        </div>
      </div>

      {/* Bantuan */}
      <Bantuan />

      {/* Footer */}
      <Footer />
    </main>
  );
}
