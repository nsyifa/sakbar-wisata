"use client";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Playfair_Display, KoHo } from "next/font/google";

import { useRef } from "react";

export default function Layout({ children }) {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      {" "}
      <Navbar onScrollToFooter={scrollToFooter} />
      {children}
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}
