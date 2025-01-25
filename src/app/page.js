"use client";

import Image from "next/image";
import SlideInComponent from "./components/SlideInComponent";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
// import FlowerSvg from "..../assets/fourp-flower.svg";

const heroPic = "/images/hero.jpg";
const flowerSvg = "./assets/fourp-flower.svg";
const greenFlowerSvg = "/assets/flower-hijau.svg";
const locationIcon = "/images/location_icon.png";
const rightArrowIcon = "/assets/right-arrow.svg";

export default function Home() {
  return (
    <div className="w-screen bg-slate-300">
      <div
        className="w-full min-h-screen relative bg-fixed bg-[center_70%] md:bg-[left_100%] flex flex-col justify-between shadow-2xl"
        style={{ backgroundImage: `url(${heroPic})` }}
      >
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(8, 12, 16, 0) 0%, rgba(53, 94, 59, 0.5) 100%)",
          }}
        >
          <div className="flex flex-col gap-6 items-center justify-center mt-52">
            <div className="font-playfair font-bold sm:text-8xl text-7xl text-white tracking-[1.5px] text-center">
              Jelajah <br /> Sakerta Barat
            </div>
            <Image
              width={100}
              height={100}
              src={flowerSvg}
              alt=""
              className="absolute sm:top-[25rem] sm:right-[3rem] xl:top-[22rem] xl:right-[22rem] top-[10rem] right-[-0.5rem]"
            />
            <Image
              width={100}
              height={100}
              src={flowerSvg}
              alt=""
              className="absolute sm:top-[12rem] sm:left-[2rem] xl:top-[12rem] xl:left-[24rem] top-[24rem] left-[-0.5rem]"
            />
            <div className="border-white/40 font-bold text-sm border-[1px] bg-white/5 tracking-[0.5px] text-white px-8 py-3 backdrop-blur-sm font-koho cursor-pointer hover:-translate-x-0.5 hover:-translate-y-1 transition-all duration-300 ease-in-out">
              Mulai
            </div>
          </div>
          <div className="w-full px-8 pb-12 flex md:flex-row flex-col gap-9 md:gap-0 justify-between items-center mt-28">
            <div className="border-white/40 border-[1px] font-playfair  bg-white/5 text-white px-8 pt-5 pb-7 backdrop-blur-sm cursor-pointer hover:-translate-x-0.5 hover:-translate-y-1 transition-all duration-300 ease-in-out w-96">
              <h2 className="font-semibold text-2xl tracking-[0.5px]">
                Sejarah Sakerta Barat
              </h2>
              <p>
                Desa Sakerta Barat memiliki sejarah yang unik. Yuk, jelajahi
                lorong sejarah dan terowongan dunia Sakerta Barat!{" "}
              </p>
            </div>

            <div className="border-white/40 border-[1px] font-playfair  bg-white/5 text-white px-8 pt-5 pb-7 backdrop-blur-sm cursor-pointer hover:-translate-x-0.5 hover:-translate-y-1 transition-all duration-300 ease-in-out w-96">
              <h2 className="font-semibold text-2xl tracking-[0.5px]">
                Wisata Sakerta Barat
              </h2>
              <p>
                Selamat datang di Desa Wisata Sakerta Barat! Mari jelajahi
                bersama keunikan yang membentuk identitas Desa Sakerta Barat.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-white pt-32 w-screen overflow-hidden pb-36">
        {/* Transparent PNG Overlay */}
        <div className="absolute inset-0 bg-[url('/images/bg-flowers.png')]"></div>

        {/* Content */}
        <div className="z-10 relative lg:px-32 px-10 w-full flex lg:flex-row flex-col lg:justify-between">
          <div className="lg:w-[61%] w-full lg:h-[60rem]">
            <h1 className="z-20 relative text-6xl font-playfair font-bold text-sakbar-brown ">
              Tentang Sakerta Barat
            </h1>
            <Image
              width={66}
              height={66}
              src={greenFlowerSvg}
              alt=""
              className="absolute z-10 -top-5 left-0 lg:-top-7 lg:left-24"
            />
            <div className="absolute left-0 top-[3.4rem] w-full h-[1px] bg-sakbar-brown"></div>
            <div className="hidden xl:block absolute right-[33.5rem] top-[3.4rem] h-[54rem] w-[1px] bg-sakbar-brown"></div>

            <p className="font-koho text-sakbar-brown text-justify text-base lg:text-lg mt-5 pl-2 leading-8">
              Desa Sakerta sebagai desa agraris dengan berbagai potensi
              pertaniannya menjadi sumber penghidupan bagi warganya. Desa
              Sakerta Barat memiliki berbagai macam UMKM dan produk hasil tani
              yang menjadi sumber penghasilan perekonomian warga desa. Seperti
              namanya, Sakerta yang diambil dari bahasa Sansekerta memiliki arti
              arah kebaikan juga diwujudkan dalam perkembangannya yang semakin
              hari penduduk desa sakerta semakin padat penduduk dengan
              produktivitasnya.
            </p>

            <div className="grid grid-cols-3 grid-rows-3 gap-4 pl-2 mt-11 h-[26rem] lg:h-[37rem] drop-shadow-lg">
              <div className="bg-slate-300 col-start-1 col-end-2 row-start-1 row-end-4 rounded-tl-[50px]"></div>
              <div className="bg-slate-300 col-start-2 col-end-4 rounded-tr-[50px]"></div>
              <div className="bg-slate-300 col-start-2 col-end-4 row-start-2 row-end-4 rounded-br-[50px]"></div>
            </div>
          </div>

          <div className="relative w-full lg:w-[25%] h-[35rem] lg:h-[50rem] lg:mt-0 mt-12">
            <SlideInComponent className="w-full h-full">
              <Image
                src="/images/map.png"
                alt="Map"
                className={`object-contain`}
                fill
              />
            </SlideInComponent>

            <div className="hidden xl:block absolute -right-32 -bottom-[7.5rem] w-[33.5rem] h-[1px] bg-sakbar-brown"></div>
          </div>
        </div>

        <div className="w-full mt-32">
          <div className="w-full flex flex-row gap-3 justify-center items-center">
            <Image
              width={65}
              height={65}
              src={locationIcon}
              alt=""
              className=""
            />
            <h1 className="text-6xl font-playfair font-bold text-sakbar-brown ">
              Lokasi
            </h1>
            <Image
              width={65}
              height={65}
              src={locationIcon}
              alt=""
              className="transform scale-x-[-1]"
            />
          </div>
          <div className="w-full mt-3 h-[1px] bg-sakbar-brown"></div>

          <div className="z-20 relative  w-full mt-12 lg:mt-24 flex flex-row flex-wrap gap-6 justify-between items-center lg:px-48 px-10">
            <SlideInComponent>
              <h1 className="font-playfair font-bold text-xl lg:text-3xl text-sakbar-brown">
                20 km dari
              </h1>
              <h1
                className="font-playfair font-bold text-5xl lg:text-6xl text-sakbar-mustard"
                style={{ textShadow: "4px 4px 0px #FFF1D4" }}
              >
                Kuningan
              </h1>
            </SlideInComponent>

            <SlideInComponent>
              <h1 className="font-playfair font-bold text-xl lg:text-3xl text-sakbar-brown">
                50 km dari
              </h1>
              <h1
                className="font-playfair font-bold text-5xl lg:text-6xl text-sakbar-mustard"
                style={{ textShadow: "4px 4px 0px #FFF1D4" }}
              >
                Cirebon
              </h1>
            </SlideInComponent>

            <SlideInComponent>
              <h1 className="font-playfair font-bold text-xl lg:text-3xl text-sakbar-brown">
                45 km dari
              </h1>
              <h1
                className="font-playfair font-bold text-5xl lg:text-6xl text-sakbar-mustard"
                style={{ textShadow: "4px 4px 0px #FFF1D4" }}
              >
                Majalengka
              </h1>
            </SlideInComponent>
          </div>

          <div className="z-20 relative  w-full mt-16 lg:mt-20 px-10 lg:px-48 h-[26rem]">
            <div className="w-full h-full rounded-[50px] border-sakbar-brown border-2 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15839.106752623555!2d108.3964231990938!3d-7.035512091215494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f3fc72a213edb%3A0xb78aa6a914910011!2sWest%20Sakerta%2C%20Darma%2C%20Kuningan%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1737642863771!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, outline: "none" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                // className="rounded-[50px] border-black border-1"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="clearfix mt-28">
          <SlideInComponent className="w-[70%] bg-slate-300 h-80 relative shadow-md z-40"></SlideInComponent>
          <SlideInComponent className="w-[80%] bg-slate-300 h-80 float-right relative shadow-md z-30"></SlideInComponent>
          <SlideInComponent className="w-[70%] bg-slate-300 h-80 z-20 relative clear-both shadow-md"></SlideInComponent>
        </div>

        <div className="w-full mt-28 text-right relative">
          <h1 className="relative z-20 text-6xl px-10 lg:px-36 font-playfair font-bold text-sakbar-brown ">
            Wisata Edukasi
          </h1>
          <Image
            width={66}
            height={66}
            src={greenFlowerSvg}
            alt=""
            className="absolute z-10 lg:bottom-6 lg:right-28 bottom-6 right-0"
          />
          <div className="absolute bottom-1 w-full h-[1px] bg-sakbar-brown"></div>
        </div>

        <div className="w-full relative bg-sakbar-light pt-20 lg:pt-32 pb-40 border-b-[1px] border-sakbar-brown">
          <div className="absolute inset-0 bg-[url('/images/bg-flowers.png')] repeat-y bg-cover"></div>
          <div className="relative bg-white h-48 pr-2 flex items-center gap-6 lg:gap-10 flex-row justify-start overflow-visible">
            <SlideInComponent className="bg-slate-300 h-[110%] w-[100%] lg:w-[50%] mt-28 rounded-tr-[50px] shadow-md"></SlideInComponent>
            <span className="font-koho text-xl lg:text-xl text-sakbar-brown">
              Belajar langsung dari para perajin lokal
            </span>
          </div>

          <div className="relative bg-white h-48 pl-2 flex items-center gap-6 lg:gap-10 flex-row-reverse justify-start mt-32 lg:mt-44 overflow-visible">
            <SlideInComponent className="bg-slate-300 h-[110%] w-[100%] lg:w-[50%] mt-28 rounded-tl-[50px] shadow-md"></SlideInComponent>
            <span className="font-koho text-xl lg:text-xl text-sakbar-brown">
              Mengeksplorasi proses pembuatan makanan khas
            </span>
          </div>

          <div className="relative bg-white h-48 pr-2 flex items-center gap-6 lg:gap-10 flex-row justify-start mt-32 lg:mt-44 overflow-visible">
            <SlideInComponent className="bg-slate-300 h-[110%] w-[100%] lg:w-[50%] mt-28 rounded-tr-[50px] shadow-md"></SlideInComponent>
            <span className="font-koho text-xl lg:text-xl text-sakbar-brown">
              Merasakan kelezatan produk tradisional yang telah turun-temurun
              diwariskan.
            </span>
          </div>
        </div>

        <div className="bg-white w-full py-16 px-10 lg:px-28 relative">
          <span className="font-koho text-xl lg:text-xl text-sakbar-brown">
            Kami mengajak sobat Sakbar untuk memasuki lorong wisata kuliner
            olahan singkong, gula merah, dan kerajinan unik lainnya yang menjadi
            warisan budaya di Desa Sakerta Barat.
          </span>
          <Link href="/sejarah" className="appearance-none">
            <div className="hover:-translate-x-0.5 hover:-translate-y-1 transition-all duration-300 ease-in-out absolute -top-8 right-5 lg:right-36">
              <SlideInComponent className="bg-sakbar-orange flex flex-row gap-3 items-center justify-center px-6 py-2 w-max rounded-[20px] cursor-pointer ">
                <span className="font-koho font-bold text-white text-2xl">
                  Lihat Selengkapnya
                </span>
                <Image
                  width={40}
                  height={40}
                  src={rightArrowIcon}
                  alt=""
                  className=""
                  layout="intrinsic"
                />
              </SlideInComponent>
            </div>
          </Link>
        </div>

        <div className="w-full bg-slate-300 h-80 relative z-20"></div>

        <div className="w-full mt-28 relative">
          <h1 className="relative z-20 text-6xl px-10 lg:px-36 font-playfair font-bold text-sakbar-brown ">
            Paket Wisata
          </h1>
          <Image
            width={66}
            height={66}
            src={greenFlowerSvg}
            alt=""
            className="absolute z-10 lg:bottom-6 lg:left-28 bottom-6 left-0"
          />
          <div className="absolute bottom-1 w-full h-[1px] bg-sakbar-brown"></div>
        </div>
        <div className="relative z-20 w-full pt-24 lg:pt-28 flex flex-row justify-center items-center flex-wrap px-10 lg:px-36 lg:gap-24 gap-16 pb-24">
          <div className="hover:-translate-x-0.5 hover:-translate-y-1 transition-all duration-300 ease-in-out w-[22rem]">
            {" "}
            <SlideInComponent className="shadow-xl cursor-pointer rounded-t-[50px] w-full overflow-hidden border-sakbar-brown border-[1px]">
              <div className="bg-slate-300 w-full h-96"></div>
              <div className="bg-white w-full h-40 flex justify-center items-center px-5 text-center">
                <span className="font-koho font-bold text-sakbar-brown text-2xl">
                  Paket Jelajah Kuliner Sakbar
                </span>
              </div>
            </SlideInComponent>
          </div>

          <div className="hover:-translate-x-0.5 hover:-translate-y-1 transition-all duration-300 ease-in-out w-[22rem]">
            {" "}
            <SlideInComponent className="shadow-xl cursor-pointer rounded-t-[50px] w-full overflow-hidden border-sakbar-brown border-[1px]">
              <div className="bg-slate-300 w-full h-96"></div>
              <div className="bg-white w-full h-40 flex justify-center items-center px-5 text-center">
                <span className="font-koho font-bold text-sakbar-brown text-2xl">
                  Paket Walking Tour
                </span>
              </div>
            </SlideInComponent>
          </div>

          <div className="hover:-translate-x-0.5 hover:-translate-y-1 transition-all duration-300 ease-in-out w-[22rem]">
            {" "}
            <SlideInComponent className="shadow-xl cursor-pointer rounded-t-[50px] w-full overflow-hidden border-sakbar-brown border-[1px]">
              <div className="bg-slate-300 w-full h-96"></div>
              <div className="bg-white w-full h-40 flex justify-center items-center px-5 text-center">
                <span className="font-koho font-bold text-sakbar-brown text-2xl">
                  Paket Premium Jejak Sakerta Barat
                </span>
              </div>
            </SlideInComponent>
          </div>
        </div>
        <div className="hover:-translate-x-0.5 hover:-translate-y-1 transition-all duration-300 ease-in-out">
          <SlideInComponent className="bg-sakbar-orange flex flex-row gap-3 items-center justify-center px-6 py-2 w-[22rem] rounded-[20px] cursor-pointer float-right mr-10 lg:mr-36">
            <span className="font-koho font-bold text-white text-2xl">
              Lihat Selengkapnya
            </span>
            <Image
              width={40}
              height={40}
              src={rightArrowIcon}
              alt=""
              className=""
              layout="intrinsic"
            />
          </SlideInComponent>
        </div>
      </div>
    </div>
  );
}
