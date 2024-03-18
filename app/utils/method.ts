import { mahasiswa, } from "@/app/utils/validation";

export const POSTMAHASISWA = async (_provider: string, data: any) => {
  const file = [data.berkas];
  console.log(file, 'file')

  const validasi = mahasiswa.safeParse({
    nim: Number(data.nim),
    namaDepan: data.namaDepan,
    namaBelakang: data.namaBelakang,
    email: data.email,
    noHp: Number(data.noHp),
    semester: Number(data.semester),
    beasiswa: Number(data.beasiswa),
  });

  let beasiswaValue;
  if (Number(data.beasiswa) === 1) {
    beasiswaValue = "akademik";
  } else if (Number(data.beasiswa) === 2) {
    beasiswaValue = "non_akademik";
  } else {
    beasiswaValue = "nilai_tidak_valid";
  }

  if (validasi.success) {
    const formData = new FormData();

    formData.append("nim", data.nim.toString());
    formData.append("nama_depan", data.namaDepan);
    formData.append("nama_belakang", data.namaBelakang);
    formData.append("email", data.email);
    formData.append("no_hp", data.noHp.toString());
    formData.append("beasiswa", beasiswaValue);
    formData.append("semester", data.semester);
    formData.append("status", "Pending");
    formData.append("file", file[0]);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/beasiswa/add`, {
      method: "POST",
      body: formData,
    });

    const dataJson = await res.json();
    console.log(dataJson, 'data')

    if (!res) {
      return { success: false, message: "Terjadi kesalahan" };
    }
    if (res.status === 200 || res.status === 201) {
      return dataJson;
    } else {
      return dataJson;
    }
  }
};