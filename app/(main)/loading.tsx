"use client";

import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

/**
 * Komponen untuk menampilkan loading spinner.
 *
 * @returns {JSX.Element} Loading spinner.
 * @author Fatkhurrohman Purnomo
 * @version 1.0
 * @date 18 Maret 2024
 */
export default function Loading(): JSX.Element {
  // State untuk menentukan apakah loading sedang berjalan
  let [loading, setLoading] = useState(true);

  // State untuk menentukan warna loading spinner
  let [color, setColor] = useState("#ffffff");

  // Pengaturan gaya loading spinner
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div className="sweet-loading h-screen flex items-center justify-center">
      {/* Loading spinner */}
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
