import type { Metadata } from "next";
import TopBaner from "@/app/ui/topBaner";
import Image from "next/image";
import Footer from "@/app/ui/footer";

export const metadata: Metadata = {
  title: "Beasiswa",
};

export default function about() {
  return (
    <main className="bg-white h-[1000px]">
      <div className="flex justify-center pt-10">
        <div className="w-[80%]">
          <h2 className="text-6xl font-semibold text-center">
            Daftar <span className="text-[#1D24CA]">Beasiswa</span>
          </h2>
        </div>
        <div>
          
        </div>
      </div>
      <Footer />
    </main>
  );
}

// https://via.placeholder.com/405x426
