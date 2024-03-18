"use client";

import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { ButtonForm } from "@/app/ui/button";
import { useFormState, useFormStatus } from "react-dom";
import { formSubmitHandlerMahasiswa } from "@/app/utils/actions";
import { useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import Search from "@/app/ui/search";

interface Semester {
  id: number;
  nama: number;
}

interface Beasiswa {
  id: number;
  nama: string;
}

// fetch data nim
async function getData({ search }: { search: string }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/beasiswa?search=${search}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data.data;
}

export default function LoginForm({ search }: { search: string }) {
  const [code, action] = useFormState(formSubmitHandlerMahasiswa, undefined);
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

  // handle nim
  useEffect(() => {
    async function fetchData() {
      const data = await getData({ search });
      if (data) {
        setIpk(data.nilai.ipk);
        setNamaDepan(data.nama_depan);
        setNamaBelakang(data.nama_belakang);
        setEmail(data.email);
        setSemester([{ id: data.semester, nama: data.semester }]);
        setNoHp(data.no_hp.slice(2));
        setBerkas(data.media[0].url);
        setStatusAsli(data.status);

        if (data.beasiswa === "akademik") {
          setBeasiswa([{ id: 1, nama: "Akademik" }]);
        } else if (data.beasiswa === "non_akademik") {
          setBeasiswa([{ id: 1, nama: "Non-Akademik" }]);
        }

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
            setStatus("404 Server Error")
            break;
        }
      }
    }

    fetchData();
  }, [search]);

  return (
    <form action={action} className="space-y-3 my-[40px]">
      <div className="flex-1 rounded border-spacing-10 border shadow px-6 pb-4 pt-8">
        <div className="w-full">
          {/* Status pendaftaran */}
          <div className="flex flex-col ">
            <h5 className="text-lg md:text-xl font-medium tracking-wide">
              STATUS PENDAFTARAN
            </h5>
            <p className={clsx(
              ' text-white font-medium w-fit rounded shadow py-2 px-7 mt-3 tracking-wider', 
              {
                'bg-gray-500': statusAsli === "Belum_daftar",
                'bg-yellow-500': statusAsli === "Pending",
                'bg-green-500': statusAsli === "Diterima",
                'bg-red-500': statusAsli === "Ditolak",
              } 
            )}>
              {status}
            </p>
          </div>
          {/* nim */}
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="nim"
            >
              NIM
            </label>
            <Search placeholder="NIM" search={search} />
            <input
              className="hidden"
              id="nim"
              type="string"
              name="nim"
              required
              value={search}
            />
          </div>
          {/* nama depan nama belakang */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3">
            {/* nama depan */}
            <div>
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="namaDepan"
              >
                NAMA DEPAN
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-5 text-sm outline-2 placeholder:text-gray-500"
                  id="namaDepan"
                  type="text"
                  name="namaDepan"
                  required
                  disabled
                  defaultValue={namaDepan}
                />
              </div>
            </div>

            {/* nama belakang */}
            <div>
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="namaBelakang"
              >
                NAMA BELAKANG
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-5 text-sm outline-2 placeholder:text-gray-500"
                  id="namaBelakang"
                  type="text"
                  name="namaBelakang"
                  required
                  disabled
                  defaultValue={namaBelakang}
                />
              </div>
            </div>
          </div>
          {/* email */}
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              EMAIL
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-5 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                required
                disabled
                defaultValue={email}
              />
            </div>
          </div>
          {/* no hp */}
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="noHp"
            >
              NO HP
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-14 text-sm outline-2 placeholder:text-gray-500"
                id="noHp"
                type="number"
                name="noHp"
                required
                disabled
                defaultValue={noHp}
              />
              <p className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900">
                +62
              </p>
            </div>
          </div>
          {/* semester */}
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="semester"
            >
              SEMESTER
            </label>
            <div className="relative">
              <select
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-5 text-sm outline-2 placeholder:text-gray-500"
                id="semester"
                name="semester"
                required
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
          {/* ipk */}
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="ipk"
            >
              IPK
            </label>
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
          {/* beasiswa */}
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="beasiswa"
            >
              BEASISWA
            </label>
            <div className="relative">
              <select
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-5 text-sm outline-2 placeholder:text-gray-500"
                id="beasiswa"
                name="beasiswa"
                required
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
          {/* berkas */}
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="berkas"
            >
              Berkas
            </label>
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
        <div className="flex h-8 items-end space-x-1">
          {code !== undefined && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p aria-live="polite" className="text-sm text-red-500">
                {code.message}
              </p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}
