import Link from "next/link";
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function ButtonNavbar() {
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

export function Button({nama, link}:{nama:string; link:string}) {
  return (
    <div className="flex items-center">
      <Link
        href={link}
        className="bg-blue-600 px-14 py-4 rounded shadow hover:bg-blue-700"
      >
        <p className="text-md text-white tracking-wider">{nama}</p>
      </Link>
    </div>
  );
}



export function ButtonForm({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        className,
      )}
    >
      {children}
    </button>
  );
}
