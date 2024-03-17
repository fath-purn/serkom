"use client";

import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { ButtonForm } from "@/app/ui/button";
import { useFormState, useFormStatus } from "react-dom";
import { formSubmitHandlerHotel } from "@/app/utils/actions";
import { useState, useEffect } from "react";
import Link from "next/link";
import Search from "@/app/ui/search";

interface Semester {
  id: number;
  nama: number;
}

interface Beasiswa {
  id: number;
  nama: string;
}

export default function LoginForm({search}:{search:string;}) {
  const [code, action] = useFormState(formSubmitHandlerHotel, undefined);
  const [ipk, setIpk] = useState<string>("0");
  const [block, setBlock] = useState<boolean>(true);
  const [namaDepan, setNamaDepan] = useState<string>();
  const [namaBelakang, setNamaBelakang] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [semester, setSemester] = useState<Semester[]>([]);
  const [beasiswa, setBeasiswa] = useState<Beasiswa[]>([]);
  const [berkas, setBerkas] = useState<File>();

  return (
    <form action={action} className="space-y-3 my-[40px]">
      <div className="flex-1 rounded border-spacing-10 border shadow px-6 pb-4 pt-8">
        <div className="w-full">
          {/* nim */}
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="nim"
            >
              NIM
            </label>
            <Search placeholder="NIM" />
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
          <div className="grid grid-cols-2 gap-3">
            {/* nama depan */}
            <div>
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="nama-depan"
              >
                NAMA DEPAN
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-5 text-sm outline-2 placeholder:text-gray-500"
                  id="nama-depan"
                  type="text"
                  name="nama-depan"
                  required
                  disabled
                />
              </div>
            </div>

            {/* nama belakang */}
            <div>
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="nama-belakang"
              >
                NAMA BELAKANG
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-5 text-sm outline-2 placeholder:text-gray-500"
                  id="nama-belakang"
                  type="text"
                  name="nama-belakang"
                  required
                  disabled
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
              />
            </div>
          </div>
          {/* no hp */}
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="no-hp"
            >
              NO HP
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-14 text-sm outline-2 placeholder:text-gray-500"
                id="no-hp"
                type="number"
                name="no-hp"
                required
                disabled
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
                defaultValue={0}
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
                value={ipk}
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
                defaultValue={0}
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
                type="file"
                name="berkas"
                required
                accept=".pdf,.jpg,,.zip"
                disabled
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3">
          {/* <CancelButton /> */}
          <LoginButton block={block} />
        </div>
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

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function LoginButton({ block }: { block: boolean }) {
  const { pending } = useFormStatus();

  return (
    <ButtonForm
      className="mt-4 bg-green-500 hover:bg-green-600 w-[15%] justify-center focus-visible:outline-green-500 active:bg-green-600"
      aria-disabled={pending ? pending : block}
    >
      Daftar
    </ButtonForm>
  );
}
