import {z} from 'zod';

export const mahasiswa = z.object({
    nim: z.number(),
    namaDepan: z.string().min(3),
    namaBelakang: z.string().min(3),
    email: z.string().email(),
    noHp: z.number().min(5),
    semester: z.number().max(8),
    beasiswa: z.number(),
});