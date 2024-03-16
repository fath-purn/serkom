import Link from "next/link";

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
