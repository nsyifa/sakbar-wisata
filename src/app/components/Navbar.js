"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const logoPic = "/images/logo-circle.png";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if the user has scrolled past a threshold
  const handleScroll = () => {
    console.log("Y", window.scrollY);
    console.log("inner height", window.innerHeight); // Log scroll position for debugging
    if (window.scrollY > window.innerHeight - 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add scroll listener on mount and cleanup on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Ensure this runs only once on mount

  // Check if current route is the root
  const isRootRoute = pathname === "/";

  return (
    <header
      className={`fixed top-0 w-full z-50 font-koho font-bold text-white ${
        isRootRoute ? "bg-transparent" : "bg-white shadow-lg text-black"
      } ${
        isScrolled ? "bg-white shadow-lg text-black" : ""
      } transition-all duration-300`}
    >
      <nav className="container py-3 px-7 flex flex-row justify-between items-center">
        <div className="flex flex-row items-center w-max gap-3 w-10 h-10">
          <img src={`${logoPic}`}></img>
          <h1 className="w-max whitespace-nowrap">Sakerta Barat</h1>
        </div>

        <div className="flex flex-row gap-8">
          <h1>Sejarah Desa</h1>
          <h1>Edukasi Wisata</h1>
          <h1>Paket Wisata</h1>
          <h1>Kontak</h1>
          <h1>Tentang Desa</h1>
        </div>
      </nav>
    </header>
  );
}
