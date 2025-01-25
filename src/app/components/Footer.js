"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-screen min:h-48 py-7 bg-sakbar-green flex flex-row gap-5 flex-wrap items-center lg:px-12 px-10">
      <Image
        width={484}
        height={516}
        src={"/images/logo_kuningan.png"}
        alt=""
        className="object-contain h-32 w-max"
      />
      <div className="flex flex-col justify-between h-32 font-koho text-white">
        <p>Desa Sakerta Barat</p>
        <p>Jl. Desa Sakerta Barat No. 12 45562</p>
        <p>info@desa-sakerta-barat.kuningankab.go.id</p>
        <div className="flex flex-row gap-2">
          <a
            href="https://www.youtube.com/@desasakertabarat4040"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={100}
              height={100}
              src="/assets/youtube.svg"
              alt="YouTube"
              className="h-11 w-11"
            />
          </a>
          <a
            href="https://www.instagram.com/sakertabarat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={100}
              height={100}
              src="/assets/instagram.svg"
              alt="Instagram"
              className="h-11 w-11"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
