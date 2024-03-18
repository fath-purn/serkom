/**
 * @Deskripsi Mengirim data mahasiswa baru ke server.
 * 
 * @param _provider Provider untuk autentikasi, tidak digunakan dalam fungsi ini.
 * @param data Objek yang berisi data mahasiswa yang akan disimpan.
 * 
 * Initial state: -
 * Final state: Objek yang berisi respons dari server setelah data mahasiswa berhasil atau gagal disimpan.
 * 
 * @Author Fatkhurrohman Purnomo / @fath-purn
 * @date 18 Maret 2024
 */

import { mahasiswa } from "@/app/utils/validation";

export const POSTMAHASISWA = async (_provider: string, data: any) => {
  // Mengambil berkas dari data
  const file = [data.berkas];

  // Validasi data mahasiswa menggunakan schema 'mahasiswa'
  const validasi = mahasiswa.safeParse({
    nim: Number(data.nim),
    namaDepan: data.namaDepan,
    namaBelakang: data.namaBelakang,
    email: data.email,
    noHp: Number(data.noHp),
    semester: Number(data.semester),
    beasiswa: Number(data.beasiswa),
  });

  // Mendefinisikan nilai 'beasiswaValue' berdasarkan data 'beasiswa' agar sesuai dengan data yang diinginkan api
  let beasiswaValue;
  if (Number(data.beasiswa) === 1) {
    beasiswaValue = "akademik";
  } else if (Number(data.beasiswa) === 2) {
    beasiswaValue = "non_akademik";
  } else {
    beasiswaValue = "nilai_tidak_valid";
  }

  // Jika validasi berhasil
  if (validasi.success) {
    // Membuat FormData untuk mengirim data ke server
    const formData = new FormData();

    // Menambahkan data mahasiswa ke FormData
    formData.append("nim", data.nim.toString());
    formData.append("nama_depan", data.namaDepan);
    formData.append("nama_belakang", data.namaBelakang);
    formData.append("email", data.email);
    formData.append("no_hp", data.noHp.toString());
    formData.append("beasiswa", beasiswaValue);
    formData.append("semester", data.semester);
    formData.append("status", "Pending");
    formData.append("file", file[0]);

    // Mengirim data mahasiswa ke server menggunakan fetch API
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/beasiswa/add`, {
      method: "POST",
      body: formData,
    });

    // Mendapatkan respons dari server dalam format JSON
    const dataJson = await res.json();

    // Jika terjadi kesalahan dalam pengiriman
    if (!res) {
      return { success: false, message: "Terjadi kesalahan" };
    }
    // Jika respons berhasil (status kode 200 atau 201)
    if (res.status === 200 || res.status === 201) {
      return dataJson;
    } else {
      return dataJson;
    }
  }
};
