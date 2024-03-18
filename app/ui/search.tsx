'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

/**
 * Komponen untuk melakukan pencarian.
 * 
 * @param {string} placeholder - Placeholder untuk input pencarian.
 * @returns {JSX.Element} Komponen pencarian.
 * @author Fatkhurrohman Purnomo / @fath-purn
 * @version 1.0
 * @date 18 Maret 2024
 */
export default function Search({ placeholder, search }: { placeholder: string; search: string; }): JSX.Element {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  /**
   * Fungsi callback untuk melakukan pencarian.
   * 
   * @param {string} term - Kata kunci pencarian.
   */
  const handleSearch = useDebouncedCallback((term) => {
    // Menambah path pada link 
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('search', term);
    } else {
      params.delete('search');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);
 
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>

      {/* Input dari pencarian */}
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-5 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
        type={"text"}
      />
    </div>
  );
}
