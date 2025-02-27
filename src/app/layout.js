import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Playfair_Display, KoHo } from "next/font/google";
import Layout from "./_layout.client";

import Navbar from "./components/Navbar"; // Import Navbar component
import Footer from "./components/Footer";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display", // Custom CSS variable
  subsets: ["latin"], // Choose subsets as needed
  weight: ["400", "600", "700"], // Specify weights (e.g., normal, bold)
});

const koho = KoHo({
  variable: "--font-koho", // Custom CSS variable
  subsets: ["latin"], // Choose subsets as needed
  weight: ["400", "700"], // Specify weights (e.g., normal, bold)
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wisata Sakerta Barat",
  description: "Website wisata desa Sakerta Barat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfairDisplay.variable} ${koho.variable} antialiased w-screen`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
