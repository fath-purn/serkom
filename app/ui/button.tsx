import Link from "next/link";
import clsx from 'clsx';

/**
 * Props untuk komponen tombol.
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

/**
 * Komponen tombol untuk navbar.
 * 
 * @returns {JSX.Element} Tombol navbar.
 */
export function ButtonNavbar(): JSX.Element {
  return (
    <div className="flex items-center">
      <Link
        href={"/beasiswa"}
        className="bg-blue-600 px-10 py-2 rounded shadow hover:bg-blue-700"
      >
        <p className="text-sm tracking-wider">Daftar</p>
      </Link>
    </div>
  );
}

/**
 * Komponen tombol dengan nama dan link tertentu.
 * 
 * @param {string} nama - Nama tombol.
 * @param {string} link - Link tujuan tombol.
 * @returns {JSX.Element} Tombol dengan nama dan link tertentu.
 */
export function Button({nama, link}:{nama:string; link:string}): JSX.Element {
  return (
    <div className="flex items-center">
      <Link
        href={link}
        className="bg-blue-600 px-10 md:px-14 py-2 md:py-4 rounded shadow hover:bg-blue-700"
      >
        <p className="text-md text-white tracking-wider">{nama}</p>
      </Link>
    </div>
  );
}

/**
 * Komponen tombol untuk formulir.
 * 
 * @param {ButtonProps} props - Props untuk komponen tombol.
 * @returns {JSX.Element} Tombol untuk formulir.
 */
export function ButtonForm({ children, className, ...rest }: ButtonProps): JSX.Element {
  return (
    <button
      {...rest}
      className={clsx(
        'flex items-center rounded shadow bg-blue-500 w-full md:w-[15%] py-3 md:px-14 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        className,
      )}
    >
      {children}
    </button>
  );
}
