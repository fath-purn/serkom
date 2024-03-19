import Image from "next/image";
import { Button } from "@/app/ui/button";

// Import gambar lokal
import Chat from "@/public/img/chat.png";

/**
 * Komponen untuk menampilkan bagian bantuan.
 *
 * @returns {JSX.Element} Komponen bagian bantuan.
 * @author Fatkhurrohman Purnomo / @fath-purn
 * @version 1.0
 * @date 18 Maret 2024
 */
export default function Bantuan(): JSX.Element {
  return (
    <div className="bg-[#201658] mt-[100px] md:pt-10">
      {/* Bagian atas */}
      <div className="pb-20 md:pt-20 flex flex-col md:flex-row items-center justify-center">
        {/* Gambar chat */}
        <Image
          alt={"Chat"}
          src={Chat}
          quality={100}
          className={`max-h-[120px] max-w-[120px] relative top-12 md:top-auto md:bottom-20 md:left-16`}
        />

        {/* Konten bantuan */}
        <div className="bg-[#F9E8C9] w-[80%] flex flex-col md:flex-row py-10 px-5 rounded shadow items-center gap-5 justify-evenly">
          {/* Deskripsi */}
          <p className="text-base text-center md:text-left">
            Ada pertanyaan terkait beasiswa? Ajukan pertanyaan disini
          </p>

          {/* Tombol untuk bantuan */}
          <Button nama="Bantuan" link="https://wa.me/6285155040590" />
        </div>
      </div>
    </div>
  );
}
