'use client'

import { motion } from 'framer-motion'

/**
 * Deskripsi: Komponen Template untuk animasi halaman menggunakan framer-motion.
 * 
 * @param children Isi dari halaman yang akan dianimasikan.
 * 
 * Initial state: Komponen tidak terlihat dan tidak bergerak.
 * Final state: Komponen terlihat dan bergerak sesuai dengan efek animasi yang diberikan.
 * 
 * @author Fatkhurrohman Purnomo / @fath-purn
 * @date 18 Maret 2024
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 1 }}
    >
      {children}
    </motion.div>
  )
}
