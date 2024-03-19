import Image from "next/image";

// Import gambar lokal
import Banner_1 from "@/public/img/beranda_1.png";
import Banner_2 from "@/public/img/beranda_2.png";
import Banner_3 from "@/public/img/beranda_3.png";
import Banner_4 from "@/public/img/beranda_4.png";

/**
 * Komponen untuk menampilkan langkah-langkah cara mendaftar beasiswa.
 * 
 * @returns {JSX.Element} Komponen langkah-langkah cara mendaftar beasiswa.
 * @author Fatkhurrohman Purnomo
 * @version 1.0
 * @date 18 Maret 2024
 */
export default function CaraDaftar(): JSX.Element {
  return (
    <div className="flex justify-center mt-[150px] md:mt-[50px]">
      <div className="w-[95%] md:w-[80%]">
        <div className="flex justify-center">
          <h3 className="text-center text-lg md:text-2xl font-medium w-[80%] md:w-[70%]">
            Temukan kesempatan beasiswa yang tepat untuk mewujudkan impianmu
          </h3>
        </div>
        
        {/* Atas */}
        <div className="flex flex-col md:flex-row gap-3 justify-center mt-[130px]">
          
          {/* Langkah 1: Temukan beasiswa pilihan */}
          <div className="md:w-[50%] flex flex-col items-center md:bg-[#F9E8C9] bg-[#98ABEE] h-[250px] rounded shadow">
            <Image
              alt={"banner_1"}
              src={Banner_1}
              quality={100}
              className={`max-h-[130px] bottom-20 relative`}
            />
            <p className="text-2xl font-medium w-[80%] md:w-[50%] text-center relative bottom-5">
              Temukan beasiswa pilihan
            </p>
          </div>
          
          {/* Langkah 2: Lengkapi administrasi pendaftaran */}
          <div className="md:w-[50%] flex flex-col items-center  md:bg-[#98ABEE] bg-[#F9E8C9] h-[250px] rounded shadow relative top-16 mt-5 md:mt-0">
            <Image
              alt={"banner_2"}
              src={Banner_2}
              quality={100}
              className={`max-h-[130px] bottom-20 relative`}
            />
            <p className="text-2xl font-medium w-[80%] md:w-[70%] text-center relative bottom-5">
              Lengkapi administrasi pendaftaran
            </p>
          </div>
        </div>
        
        {/* Bawah */}
        <div className="flex flex-col md:flex-row gap-3 justify-center mt-[145px] md:mt-[135px]">
          
          {/* Langkah 3: Submit pada form pendaftaran */}
          <div className="md:w-[50%] flex flex-col items-center bg-[#98ABEE] h-[250px] rounded shadow">
            <Image
              alt={"banner_3"}
              src={Banner_3}
              quality={100}
              className={`max-h-[130px] bottom-20 relative`}
            />
            <p className="text-2xl font-medium w-[80%] md:w-[50%] text-center relative bottom-5">
              Submit pada form pendaftaran
            </p>
          </div>
          
          {/* Langkah 4: Pengajuan beasiswa disetujui */}
          <div className="md:w-[50%] flex flex-col items-center bg-[#F9E8C9] h-[250px] rounded shadow relative top-20 mt-5 md:mt-0">
            <Image
              alt={"banner_4"}
              src={Banner_4}
              quality={100}
              className={`max-h-[130px] bottom-20 relative`}
            />
            <p className="text-2xl font-medium w-[80%] md:w-[70%] text-center relative bottom-5">
              Pengajuan beasiswa disetujui
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
