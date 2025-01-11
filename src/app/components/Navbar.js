"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

const logoPic = "/images/logo-circle.png";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

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
      className={`fixed top-0 w-full z-50 font-koho font-bold transition-all duration-300 ${
        isScrolled || !isRootRoute
          ? "bg-white shadow-lg text-sakbar-brown"
          : "bg-transparent text-white"
      }`}
    >
      <nav className="w-full py-3 px-8 flex flex-wrap justify-between items-center">
        <div className="flex flex-row items-center w-max gap-3">
          <img className="w-10 h-10" src={`${logoPic}`}></img>
          <h1 className="w-max whitespace-nowrap">Sakerta Barat</h1>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg lg:hidden hover:bg-gray-100 hover:text-sakbar-brown focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={!isCollapsed}
          onClick={toggleNavbar}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${
            isCollapsed ? "hidden" : "block"
          } lg:block lg:w-autoflex basis-full lg:basis-auto`}
          id="navbar-default  "
        >
          <ul className="font-bold flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 backdrop-blur-sm lg:backdrop-blur-none">
            <li className="hover:-translate-x-0.5 hover:-translate-y-1 transition-transform duration-300 ease-in-out relative group">
              <Link href="/sejarah" className="appearance-none">
                <h1 className="block py-2 px-3 bg-transparent rounded lg:bg-transparent lg:p-0 group-hover:drop-shadow-xl">
                  Sejarah Desa
                </h1>
              </Link>
            </li>
            <li className="hover:-translate-x-0.5 hover:-translate-y-1 transition-transform duration-300 ease-in-out relative group">
              <Link href="/sejarah" className="appearance-none">
                <h1 className="block py-2 px-3 bg-transparent rounded lg:bg-transparent lg:p-0 group-hover:drop-shadow-xl">
                  Edukasi Wisata
                </h1>
              </Link>
            </li>
            <li className="hover:-translate-x-0.5 hover:-translate-y-1 transition-transform duration-300 ease-in-out relative group">
              <Link href="/sejarah" className="appearance-none">
                <h1 className="block py-2 px-3 bg-transparent rounded lg:bg-transparent lg:p-0 group-hover:drop-shadow-xl">
                  Paket Wisata
                </h1>
              </Link>
            </li>
            <li className="hover:-translate-x-0.5 hover:-translate-y-1 transition-transform duration-300 ease-in-out relative group">
              <Link href="/sejarah" className="appearance-none">
                <h1 className="block py-2 px-3 bg-transparent rounded lg:bg-transparent lg:p-0 group-hover:drop-shadow-xl">
                  Kontak
                </h1>
              </Link>
            </li>
            <li className="hover:-translate-x-0.5 hover:-translate-y-1 transition-transform duration-300 ease-in-out relative group">
              <Link href="/sejarah" className="appearance-none">
                <h1 className="block py-2 px-3 bg-transparent rounded lg:bg-transparent lg:p-0 group-hover:drop-shadow-xl">
                  Tentang Desa
                </h1>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
