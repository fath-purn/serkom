import type { Metadata } from 'next';
import { poppins } from '@/app/ui/fonts';
import '../globals.css';
import Navbar from '@/app/ui/navbar';

export const metadata: Metadata = {
  title: {
    template: '%s | HAIIIII',
    default: 'HAIIIII',
  },
  description: 'HAIIIII',
  metadataBase: new URL('https://fe-explore-banyumas.vercel.app/'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Navbar />
        <div className="relative top-[60px] md:top-[70px] bottom-[70px] md:bottom-0 bg-white text-[#262626]">
          {children}
        </div>
      </body>
    </html>
  )
}
