import type { Metadata } from "next";
import Footer from "@/app/ui/footer";
import Form from "@/app/ui/form";

/**
 * Metadata untuk halaman Daftar Beasiswa.
 */
export const metadata: Metadata = {
  title: "Beasiswa",
};

/**
 * Halaman Daftar Beasiswa.
 *
 * @description Komponen ini menampilkan form yang digunakan untuk menginput data
 *               bagi pendaftar beasiswa
 * @param {object} props - Properti halaman.
 * @param {object} props.searchParams - Parameter pencarian.
 * @param {string} props.searchParams.search - Kata kunci pencarian.
 * @returns {JSX.Element} Halaman Daftar Beasiswa.
 * @author Fatkhurrohman Purnomo / @fath-purn
 * @version 1.0
 * @date 18 Maret 2024
 */
export default function Page({
  searchParams,
}: {
  searchParams?: {
    search?: string;
  };
}): JSX.Element {
  const search = searchParams?.search || "";

  return (
    <main className="">
      <div className="flex justify-center pt-10 bg-white">
        <div className="w-[95%] md:w-[80%]">
          {/* Judul */}
          <h2 className="text-4xl md:text-6xl font-semibold text-center">
            Daftar <span className="text-[#1D24CA]">Beasiswa</span>
          </h2>
          <div>
            {/* Form input data pengajuan */}
            <Form search={search} />
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </main>
  );
}
