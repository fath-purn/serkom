"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import Search from "@/app/ui/search";

// Deklarasi tipe data
interface Semester {
  id: number;
  nama: number;
}

// Deklarasi tipe data
interface Beasiswa {
  id: number;
  nama: string;
}

// Fungsi untuk mengambil data mahasiswa berdasarkan NIM
async function getData({ search }: { search: string }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/beasiswa?search=${search}`,
    { cache: "no-store" }
  );

  // jika data / server error
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  // jika berhasil data akan dikirim balik ke pemanggil
  const data = await res.json();
  return data.data;
}

/**
 * Deskripsi: Komponen untuk menampilkan data mahasiswa yang telah terdaftar dengan status pendaftaran.
 *
 * @description Komponen untuk melihat status dan data mahasiswa yang terdaftar
 * @param search Pencarian untuk mendapatkan data mahasiswa berdasarkan NIM.
 *
 * Initial state: Menampilkan data mahasiswa yang telah terdaftar.
 * Final state: Menampilkan hasil mahasiswa
 *
 * @returns {JSX.Element} Komponen formulir.
 * @author Fatkhurrohman Purnomo / @fath-purn
 * @version 1.0
 * @date 18 Maret 2024
 */
export default function LoginForm({ search }: { search: string }): JSX.Element {
  // state untuk menampung data semestara
  const [ipk, setIpk] = useState<string>("0");
  const [namaDepan, setNamaDepan] = useState<string>("");
  const [namaBelakang, setNamaBelakang] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [noHp, setNoHp] = useState<number>(0);
  const [semester, setSemester] = useState<Semester[]>([]);
  const [beasiswa, setBeasiswa] = useState<Beasiswa[]>([]);
  const [berkas, setBerkas] = useState<string>();
  const [status, setStatus] = useState<string>();
  const [statusAsli, setStatusAsli] = useState<string>();

  // Mengambil data mahasiswa saat komponen dimuat
  useEffect(() => {
    // Memanggil fungsi dan menyimpan hasilnya
    async function fetchData() {
      // Memanggil fungsi
      const data = await getData({ search });

      // Jika tidak ada data yang dikembalikan
      if (data) {
        // Mengatur data mahasiswa ke state
        setIpk(data.nilai.ipk);
        setNamaDepan(data.nama_depan);
        setNamaBelakang(data.nama_belakang);
        setEmail(data.email);
        setSemester([{ id: data.semester, nama: data.semester }]);
        setNoHp(data.no_hp.slice(2));
        setBerkas(data.media[0].url);
        setStatusAsli(data.status);

        // Mengatur data beasiswa
        if (data.beasiswa === "akademik") {
          setBeasiswa([{ id: 1, nama: "Akademik" }]);
        } else if (data.beasiswa === "non_akademik") {
          setBeasiswa([{ id: 1, nama: "Non-Akademik" }]);
        }

        // Mengatur status pendaftaran
        switch (data.status) {
          case "Belum_daftar":
            setStatus("Belum Terdaftar");
            break;
          case "Pending":
            setStatus("Belum di Verifikasi");
            break;
          case "Diterima":
            setStatus("Diterima");
            break;
          case "Ditolak":
            setStatus("Ditolak");
            break;
          default:
            setStatus("404 Server Error");
            break;
        }
      }
    }

    // memanggil fungsi
    fetchData();
  }, [search]);

  return (
    <form action={""} className="space-y-3 my-[40px]">
      <div className="flex-1 rounded border-spacing-10 border shadow px-6 pb-4 pt-8">
        <div className="w-full">
          {/* Status pendaftaran */}
          <div className="flex flex-col ">
            <h5 className="text-lg md:text-xl font-medium tracking-wide">
              STATUS PENDAFTARAN
            </h5>

            {/* Menampilkan status pendaftaran */}
            {status && (
              <p
                className={clsx(
                  " text-white font-medium w-fit rounded shadow py-2 px-7 mt-3 tracking-wider",
                  {
                    "bg-gray-500": statusAsli === "Belum_daftar",
                    "bg-yellow-500": statusAsli === "Pending",
                    "bg-green-500": statusAsli === "Diterima",
                    "bg-red-500": statusAsli === "Ditolak",
                  }
                )}
              >
                {status}
              </p>
            )}
          </div>

          {/* Input NIM */}
          <div>
            {/* Label NIM */}
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="nim"
            >
              NIM
            </label>

            {/* Mencari data sesuai NIM */}
            <Search placeholder="NIM" search={search} />

            {/* Menyimpan NIM untuk diteruskan ke server */}
            <input className="hidden" value={search} />
          </div>

          {/* Data Nama Depan dan Nama Belakang */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3">
            {/* Data Nama Depan */}
            <div>
              {/* Label Nama Depan */}
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="namaDepan"
              >
                NAMA DEPAN
              </label>

              {/* Data Nama Depan */}
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-5 text-sm outline-2 placeholder:text-gray-500"
                  id="namaDepan"
                  type="text"
                  name="namaDepan"
                  disabled
                  defaultValue={namaDepan}
                />
              </div>
            </div>

            {/* Data Nama Belakang */}
            <div>
              {/* Label Nama Belakang */}
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="namaBelakang"
              >
                NAMA BELAKANG
              </label>

              {/* Data Nama Belakang */}
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-5 text-sm outline-2 placeholder:text-gray-500"
                  id="namaBelakang"
                  type="text"
                  name="namaBelakang"
                  disabled
                  defaultValue={namaBelakang}
                />
              </div>
            </div>
          </div>

          {/* Data Email */}
          <div>
            {/* Label Email */}
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              EMAIL
            </label>

            {/* Data Email*/}
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-5 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                disabled
                defaultValue={email}
              />
            </div>
          </div>

          {/* Data No HP */}
          <div>
            {/* Label No HP */}
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="noHp"
            >
              NO HP
            </label>

            {/* Data No HP */}
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-14 text-sm outline-2 placeholder:text-gray-500"
                id="noHp"
                type="number"
                name="noHp"
                disabled
                defaultValue={noHp}
              />
              <p className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900">
                +62
              </p>
            </div>
          </div>

          {/* Data Semester */}
          <div>
            {/* Label Semester */}
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="semester"
            >
              SEMESTER
            </label>

            {/* Data Semester */}
            <div className="relative">
              <select
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-5 text-sm outline-2 placeholder:text-gray-500"
                id="semester"
                name="semester"
                defaultValue={1}
                disabled
              >
                <option value={0} disabled>
                  Pilih Semester
                </option>
                {semester.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.nama}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Data IPK */}
          <div>
            {/* Label IPK */}
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="ipk"
            >
              IPK
            </label>

            {/* Data IPK */}
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-5 text-sm outline-2 placeholder:text-gray-500"
                id="ipk"
                type="text"
                name="ipk"
                disabled
                defaultValue={ipk}
              />
            </div>
          </div>

          {/* Data Beasiswa */}
          <div>
            {/* Label Beasiswa */}
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="beasiswa"
            >
              BEASISWA
            </label>

            {/* Data Beasiswa */}
            <div className="relative">
              <select
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-5 text-sm outline-2 placeholder:text-gray-500"
                id="beasiswa"
                name="beasiswa"
                defaultValue={1}
                disabled
              >
                <option value={0} disabled>
                  Pilih Beasiswa
                </option>
                {beasiswa.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.nama}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Data Berkas */}
          <div>
            {/* Label Berkas */}
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="berkas"
            >
              Berkas
            </label>

            {/* Link Berkas */}
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-5 text-sm outline-2 placeholder:text-gray-500"
                id="berkas"
                type="text"
                name="berkas"
                disabled
              />
              <Link
                href={berkas ? berkas : "/"}
                target="blank"
                className="text-sm absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
              >
                {berkas}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3"></div>
      </div>
    </form>
  );
}
