/**
 * @Deskripsi Menangani pengiriman data mahasiswa dari formulir ke server.
 * 
 * @param prevState Status sebelumnya, tidak digunakan dalam fungsi ini.
 * @param formData Objek FormData yang berisi data mahasiswa dari formulir.
 * 
 * Initial state: -
 * Final state: Objek yang berisi respons dari server setelah data mahasiswa berhasil atau gagal disimpan.
 * 
 * @Author Fatkhurrohman Purnomo / @fath-purn
 * @date 18 Maret 2024
 */

import { POSTMAHASISWA } from "@/app/utils/method";

export async function formSubmitHandlerMahasiswa(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    // Mengirim data mahasiswa ke server menggunakan fungsi POSTMAHASISWA
    const code = await POSTMAHASISWA("POSTMAHASISWA", Object.fromEntries(formData));

    // Jika respons sukses dan berhasil disimpan, arahkan ke halaman halaman hasil
    if (code && code.success === true) {
      window.location.href = "/hasil";
      return code;
    }

    // Jika respons gagal, kembalikan respons
    if (code && code.success === false) {
      return code;
    } else {
      // Jika terjadi kesalahan yang tidak terduga
      return {
        success: false,
        message: "Beasiswa gagal diinput, silahkan coba lagi",
      };
    }
  } catch (error) {
    // Jika terjadi kesalahan dalam pengiriman data
    return { success: false, message: "Form submission failed" };
  }
}
