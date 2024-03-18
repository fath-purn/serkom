"use client";

import {
  POSTMAHASISWA,
} from "@/app/utils/method";

export async function formSubmitHandlerMahasiswa(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const code = await POSTMAHASISWA("POSTMAHASISWA", Object.fromEntries(formData));

    if (code && code.success === true) {
      window.location.href = "/hasil";
      return code;
    }

    if (code && code.success === false) {
      return code;
    } else {
      return {
        success: false,
        message: "Beasiswa gagal di input silahkan coba lagi",
      };
    }
  } catch (error) {
    return { success: false, message: "Form submission failed" };
  }
}