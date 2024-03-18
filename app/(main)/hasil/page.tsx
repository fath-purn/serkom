import type { Metadata } from "next";
import Footer from "@/app/ui/footer";
import Form from "@/app/ui/form-hasil";

export const metadata: Metadata = {
  title: "Hasil",
};

export default function Page({
  searchParams,
}: {
  searchParams?: {
    search?: string;
  };
}) {
  const search = searchParams?.search || "";

  return (
    <main className="">
      <div className="flex justify-center pt-10 bg-white">
        <div className="w-[95%] md:w-[80%]">
          <h2 className="text-4xl md:text-6xl font-semibold text-center">
            Hasil <span className="text-[#1D24CA]">Beasiswa</span>
          </h2>
          <div>
            <Form search={search} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
