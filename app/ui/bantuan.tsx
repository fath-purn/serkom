import Image from "next/image";
import { Button } from "@/app/ui/button";

// import local
import Chat from "@/public/img/chat.png";

export default function Bantuan() {
  return (
    <div className="bg-[#201658] mt-[100px] pt-10">
      <div className="py-20 flex items-center justify-center">
        <Image
          alt={"Chat"}
          src={Chat}
          quality={100}
          className={`max-h-[120px] max-w-[120px] relative bottom-20 left-16`}
        />
        <div className="bg-[#F9E8C9] w-[50%] flex flex-row py-10 px-5 rounded shadow items-center gap-5 justify-evenly">
          <p className="text-base">
            Ada pertanyaan terkait beasiswa? Ajukan pertanyaan disini
          </p>
          <Button nama="Bantuan" link="wa.me/6285155040590" />
        </div>
      </div>
    </div>
  );
}
