import type { Metadata } from 'next';
import { poppins } from '@/app/ui/fonts';
import '../globals.css';
import Navbar from '@/app/ui/navbar';

/**
 * Metadata untuk halaman.
 */
export const metadata: Metadata = {
  title: {
    template: '%s | HAIIIII',
    default: 'HAIIIII',
  },
  description: 'HAIIIII',
  metadataBase: new URL('http://localhost:3000/'),
}

/**
 * Komponen layout utama.
 * 
 * @param {React.ReactNode} children Anak-anak komponen.
 * @returns {JSX.Element} Komponen layout utama.
 * @author Fatkhurrohman Purnomo / @fath-purn
 * @version 1.0
 * @date 18 Maret 2024
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        {/* Navbar */}
        <Navbar />
        {/* Konten */}
        <div className="relative top-[60px] md:top-[70px] bottom-[70px] md:bottom-0 bg-white text-[#262626]">
          {children}
        </div>
      </body>
    </html>
  )
}
