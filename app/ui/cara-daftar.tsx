import Image from "next/image";

// import local
import Banner_1 from "@/public/img/beranda_1.png";
import Banner_2 from "@/public/img/beranda_2.png";
import Banner_3 from "@/public/img/beranda_3.png";
import Banner_4 from "@/public/img/beranda_4.png";

export default function CaraDaftar() {

  return (
      <div className="flex justify-center mt-[50px]">
        <div className="w-[80%]">
          <div className="flex justify-center">
            <h3 className="text-center text-2xl font-medium w-[70%]">
              Temukan kesempatan beasiswa yang tepat untuk mewujudkan impian
              Anda
            </h3>
          </div>
          {/* Atas */}
          <div className="flex flex-row gap-3 justify-center mt-[130px]">
            <div className="w-[50%] flex flex-col items-center bg-[#F9E8C9] h-[250px] rounded shadow">
              <Image
                alt={"banner_1"}
                src={Banner_1}
                quality={100}
                className={`max-h-[130px] bottom-20 relative`}
              />
              <p className="text-2xl font-medium w-[50%] text-center relative bottom-5">
                Temukan beasiswa pilihan
              </p>
            </div>
            <div className="w-[50%] flex flex-col items-center bg-[#98ABEE] h-[250px] rounded shadow relative top-16">
              <Image
                alt={"banner_2"}
                src={Banner_2}
                quality={100}
                className={`max-h-[130px] bottom-20 relative`}
              />
              <p className="text-2xl font-medium w-[70%] text-center relative bottom-5">
                Lengkapi administrasi pendaftaran
              </p>
            </div>
          </div>
          {/* Bawah */}
          <div className="flex flex-row gap-3 justify-center mt-[135px]">
            <div className="w-[50%] flex flex-col items-center bg-[#98ABEE] h-[250px] rounded shadow">
              <Image
                alt={"banner_3"}
                src={Banner_3}
                quality={100}
                className={`max-h-[130px] bottom-20 relative`}
              />
              <p className="text-2xl font-medium w-[50%] text-center relative bottom-5">
                Submit pada form pendaftaran
              </p>
            </div>
            <div className="w-[50%] flex flex-col items-center bg-[#F9E8C9] h-[250px] rounded shadow relative top-20">
              <Image
                alt={"banner_4"}
                src={Banner_4}
                quality={100}
                className={`max-h-[130px] bottom-20 relative`}
              />
              <p className="text-2xl font-medium w-[70%] text-center relative bottom-5">
                Pengajuan beasiswa disetujui
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}
