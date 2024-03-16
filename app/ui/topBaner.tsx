import Image from "next/image";
import Banner from "@/public/img/baner.png"

export default function Background() {
  return (
    <div className="flex items-center justify-center h-full d:w-3/5 md:px-28 md:py-12">
      <Image
        alt={"Banner"}
        src={Banner}
        quality={100}
        fill
        className={`max-h-[300px] absolute top-0 left-0 z-[-1] object-cover w-[100%] brightness-[0.6]`}
      />
      <div className="flex flex-col items-center m-auto">
        <h1 className="text-white font-bold text-5xl md:text-[50px] leading-relaxed text-center w-[90%] sm:w-full">
          Pilihan Beasiswa  Mahasiswa
        </h1>
      </div>
    </div>
  );
}
