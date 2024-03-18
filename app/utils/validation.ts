/**
 * @Deskripsi Skema untuk memvalidasi data mahasiswa.
 * @Properti
 * - nim: Angka (number).
 * - namaDepan: String dengan panjang minimal 3 karakter.
 * - namaBelakang: String dengan panjang minimal 3 karakter.
 * - email: String yang memenuhi format email.
 * - noHp: Angka (number) dengan panjang minimal 5 digit.
 * - semester: Angka (number) dengan nilai maksimal 8.
 * - beasiswa: Angka (number).
 * 
 * Initial state: -
 * Final state: Skema mahasiswa yang siap digunakan untuk validasi.
 * 
 * @Author Fatkhurrohman Purnomo
 * @version 1.0
 * @date 18 Maret 2024
 */

import { z } from 'zod';

export const mahasiswa = z.object({
    nim: z.number(),
    namaDepan: z.string().min(3),
    namaBelakang: z.string().min(3),
    email: z.string().email(),
    noHp: z.number().min(5),
    semester: z.number().max(8),
    beasiswa: z.number(),
});
