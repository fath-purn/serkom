"use client";

import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { ButtonForm } from "@/app/ui/button";
import { useFormState, useFormStatus } from "react-dom";
import { formSubmitHandlerMahasiswa } from "@/app/utils/actions";
import { useState, useEffect } from "react";
import Link from "next/link";
import Search from "@/app/ui/search";

// array untuk semsester yang tersedia
const semester = [
  {
    id: 1,
    nama: 1,
  },
  {
    id: 2,
    nama: 2,
  },
  {
    id: 3,
    nama: 3,
  },
  {
    id: 4,
    nama: 4,
  },
  {
    id: 5,
    nama: 5,
  },
  {
    id: 6,
    nama: 6,
  },
  {
    id: 7,
    nama: 7,
  },
  {
    id: 8,
    nama: 8,
  },
];

// array untuk jenis beasiswa yang dibuka
const beasiswa = [
  {
    id: 1,
    nama: "Akademik",
  },
  {
    id: 2,
    nama: "Non-Akademik",
  },
];

// Fungsi untuk mengambil data IPK mahasiswa berdasarkan NIM
async function getData({ search }: { search: string }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/nilai?search=${search}`,
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
 * Form yang digunakan untuk input data dan berkas pendaftar beasiswa
 *
 * @description Komponen untuk formulir pendaftaran mahasiswa. Mengirimkan data mahasiswa ke server.
 * @param search Pencarian untuk mendapatkan data IPK mahasiswa.
 *
 * Initial state: Formulir dengan data yang telah diisi.
 * Final state: Pengiriman data mahasiswa ke server dan menampilkan pesan respons atau kesalahan.
 * @returns {JSX.Element} Komponen formulir.
 * @author Fatkhurrohman Purnomo / @fath-purn
 * @version 1.0
 * @date 18 Maret 2024
 */
export default function LoginForm({ search }: { search: string }): JSX.Element {
  // Handle untuk form ketika di submit
  const [code, action] = useFormState(formSubmitHandlerMahasiswa, undefined);

  // state untuk menampung data semestara
  const [ipk, setIpk] = useState<string>("0");
  const [block, setBlock] = useState<boolean>(true);

  // Mengambil data IPK mahasiswa saat komponen dimuat
  useEffect(() => {
    // Memanggil fungsi dan menyimpan hasilnya
    async function fetchData() {
      // Memanggil fungsi
      const data = await getData({ search });

      // Jika tidak ada data yang dikembalikan
      if (data) {
        setIpk(data.ipk);

        // Menentukan apakah form harus diblokir berdasarkan IPK mahasiswa yang harus diatas 3
        // Jika ipk yang dimiliki dibawah 3 maka tidak akan bisa submit formulir
        if (data.ipk >= 3) {
          setBlock(false);
        } else if (data.ipk <= 3) {
          setBlock(true);
        }
      } else {
        setIpk("0");
      }
    }

    // memanggil fungsi
    fetchData();
  }, [search]);

  return (
    <form action={action} className="space-y-3 my-[40px]">
      <div className="flex-1 rounded border-spacing-10 border shadow px-6 pb-4 pt-8">
        <div className="w-full">
          {/* Input NIM */}
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="nim"
            >
              NIM
            </label>

            {/* Mencari data sesuai NIM */}
            <Search placeholder="NIM" search={search} />

            {/* Menyimpan NIM untuk diteruskan ke server */}
            <input
              className="hidden"
              id="nim"
              type="string"
              name="nim"
              required
              defaultValue={search}
            />
          </div>

          {/* Input Nama Depan dan Nama Belakang */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3">
            {/* Input Nama Depan */}
            <div>
              {/* Label Nama Depan */}
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="namaDepan"
              >
                NAMA DEPAN
              </label>
              {/* Input Nama Depan */}
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-5 text-sm outline-2 placeholder:text-gray-500"
                  id="namaDepan"
                  type="text"
                  name="namaDepan"
                  placeholder="Nama depan"
                  required
                />
              </div>
            </div>

            {/* Input Nama Belakang */}
            <div>
              {/* Label Nama Belakang */}
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="namaBelakang"
              >
                NAMA BELAKANG
              </label>
              {/* Input Nama Belakang */}
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-5 text-sm outline-2 placeholder:text-gray-500"
                  id="namaBelakang"
                  type="text"
                  name="namaBelakang"
                  placeholder="Nama belakang"
                  required
                />
              </div>
            </div>
          </div>

          {/* Input Email */}
          <div>
            {/* Label Email */}
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              EMAIL
            </label>
            {/* Input email */}
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-5 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Masukkan email"
                required
              />
            </div>
          </div>

          {/* Input No HP */}
          <div>
            {/* Label No HP */}
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="noHp"
            >
              NO HP
            </label>
            {/* Input No HP */}
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-14 text-sm outline-2 placeholder:text-gray-500"
                id="noHp"
                type="number"
                name="noHp"
                placeholder="Masukkan no hp"
                required
              />
              <p className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900">
                +62
              </p>
            </div>
          </div>

          {/* Input Semester */}
          <div>
            {/* Label Semester */}
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="semester"
            >
              SEMESTER
            </label>
            {/* Input semester */}
            <div className="relative">
              <select
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-5 text-sm outline-2 placeholder:text-gray-500"
                id="semester"
                name="semester"
                aria-placeholder="Pilih semester sekarang"
                required
                defaultValue={0}
              >
                <option value={0} disabled>
                  Pilih Semester
                </option>

                {/* Mapping semester yang dibuka */}
                {semester.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.nama}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Input IPK */}
          <div>
            {/* Label IPK */}
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="ipk"
            >
              IPK
            </label>
            {/* Input IPK */}
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-5 text-sm outline-2 placeholder:text-gray-500"
                id="ipk"
                type="text"
                name="ipk"
                required
                disabled
                defaultValue={ipk}
              />
            </div>
          </div>

          {/* Input beasiswa yang diminati */}
          <div>
            {/* Label Beasiswa */}
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="beasiswa"
            >
              BEASISWA
            </label>
            {/* Input Beasiswa */}
            <div className="relative">
              <select
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-5 text-sm outline-2 placeholder:text-gray-500"
                id="beasiswa"
                name="beasiswa"
                aria-placeholder="Pilih beasiswa"
                required
                defaultValue={0}
                disabled={block}
              >
                <option value={0} disabled>
                  Pilih Beasiswa
                </option>

                {/* Mapping beasiswa yang dibuka */}
                {beasiswa.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.nama}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Input Berkas */}
          <div>
            {/* Label Berkas */}
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="berkas"
            >
              Berkas
            </label>
            {/* Input Berkas */}
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-5 text-sm outline-2 placeholder:text-gray-500"
                id="berkas"
                type="file"
                name="berkas"
                required
                accept=".pdf,.jpg,.zip,"
                disabled={block}
              />
              <div className="text-xs text-red-500" id="berkasError">
                Only PDF, JPG, and ZIP files are allowed.
              </div>
            </div>
          </div>
        </div>

        {/* Button untuk cancel dan daftar */}
        <div className="flex justify-end gap-3 mt-3 md:mt-auto">
          <CancelButton />
          <DaftarButton block={block} />
        </div>

        {/* Jika ada error pada form */}
        <div className="flex h-8 items-end space-x-1">
          {code !== undefined && (
            <>
              <div className="flex flex-row items-start gap-3">
                {/* Icon */}
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />

                {/* Menampilkan error yang didapat */}
                <div className="flex flex-col">
                  <p aria-live="polite" className="text-sm text-red-500">
                    {code.message}
                  </p>
                  <p aria-live="polite" className="text-sm text-red-500">
                    {code.err}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

// Button daftar
function DaftarButton({ block }: { block: boolean }) {
  // Jika server sedang berjalan
  const { pending } = useFormStatus();

  return (
    <ButtonForm
      className="mt-4 bg-green-500 hover:bg-green-600 justify-center focus-visible:outline-green-500 active:bg-green-600"
      aria-disabled={pending ? pending : block}
    >
      Daftar
    </ButtonForm>
  );
}

// Button cancel
function CancelButton() {
  return (
    <Link
      href="/"
      className="flex w-full md:w-[15%] py-3 md:px-14 items-center rounded shadow text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 active:bg-red-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 mt-4 bg-red-500 hover:bg-red-600 justify-center"
    >
      Cancel{" "}
    </Link>
  );
}
