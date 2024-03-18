import Link from "next/link";

/**
 * Komponen untuk bagian footer.
 *
 * @returns {JSX.Element} Komponen footer.
 * @author Fatkhurrohman Purnomo / @fath-purn
 * @version 1.0
 * @date 18 Maret 2024
 */
export default function Footer(): JSX.Element {
  // Mendapatkan tahun saat ini
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex justify-center bg-[#F9E8C9] py-[40px]">
      <div className="w-[80%]">
        {/* Judul footer */}
        <h4 className="text-3xl md:text-4xl font-bold tracking-[1rem]">
          HAIIIII
        </h4>
        {/* Bagian konten footer */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Bagian informasi */}
          <div>
            <h5 className="text-xl md:text-2xl tracking-wide mt-10">
              Pusat Layanan Informasi Beasiswa{" "}
            </h5>

            {/* Alamat dan kontak */}
            <p className="text-base tracking-wide mt-5 md:mt-10">
              Pusat Layanan Pembiayaan Pendidikan
            </p>
            <p className="text-base tracking-wide mt-1">
              Jl. DI Panjaitan No.128, Karangreja, Purwokerto Kulon, Kec.
              Purwokerto Sel., Kabupaten Banyumas, Jawa Tengah 53141
            </p>
            <p className="text-base tracking-wide mt-1">
              Email : mail@mail.com
            </p>
            <p className="text-base tracking-wide mt-3">
              Meraih masa depan sukses bersama Beasiswa Unggulan dengan menjadi
              Insan Cerdas dan Kompetitif.
            </p>
          </div>

          {/* Tautan terkait */}
          <div>
            <h5 className="text-xl md:text-2xl tracking-wide mt-10">
              Tautan Terkait
            </h5>
            {/* Daftar tautan terkait */}
            <div className="flex flex-col mt-5 md:mt-10">
              {/* Tautan IT Telkom */}
              <Link href={"/"} className="text-base tracking-wide w-fit">
                IT Telkom{" "}
              </Link>
              {/* Tautan Github */}
              <Link
                href={"https://github.com/fath-purn"}
                className="text-base tracking-wide mt-1 relative w-fit"
              >
                Github{" "}
              </Link>
            </div>
          </div>
        </div>
        {/* Hak cipta */}
        <p className="text-base tracking-wide text-center mt-10 ">
          © {currentYear} Copyright Fatkhurrohman Purnomo
        </p>
      </div>
    </div>
  );
}
