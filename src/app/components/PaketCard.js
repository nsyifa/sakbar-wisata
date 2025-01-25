"use client";
import Image from "next/image";
import { useState } from "react";

const PaketCard = ({ title, desc, images, price }) => {
  return (
    <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-full md:max-w-full mx-auto border border-sakbar-brown bg-white md:h-[33rem] lg:h-[24rem] xl:h-[23rem]">
      <div className="md:h-full h-[20rem] w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-2">
        <div className="relative col-span-1 row-span-1 h-full w-full">
          <Image
            src={images[0]}
            alt="wisata image"
            className="object-cover"
            fill
          />
        </div>

        <div className="relative col-span-1 row-span-1 h-full w-full">
          <Image
            src={images[1]}
            alt="wisata image"
            className="object-cover"
            fill
          />
        </div>

        <div className="relative col-span-1 row-span-1 h-full w-full">
          <Image
            src={images[2]}
            alt="wisata image"
            className="object-cover"
            fill
          />
        </div>

        <div className="relative col-span-1 row-span-1 h-full w-full">
          <Image
            src={images[3]}
            alt="wisata image"
            className="object-cover"
            fill
          />
        </div>
      </div>
      {/* <div className="relative h-full w-full md:w-1/2 bg-white grid place-items-center">
        <Image
          src={image}
          alt="wisata image"
          className="rounded-xl object-cover"
          fill
        />
      </div> */}
      <div className="w-full h-full md:w-2/3 bg-white flex flex-col space-y-2 p-3 justify-between">
        <div>
          <h3 className=" text-sakbar-brown font-bold md:text-3xl text-xl font-playfair">
            {title}
          </h3>
          <p className="mt-2 md:text-lg text-gray-600 text-base font-koho text-justify mr-5">
            {desc}
          </p>
        </div>

        <p className="text-xl text-sakbar-brown font-koho font-bold self-end justify-self-end">
          @{price}
          <span className="text-gray-600 font-koho font-bold text-base">
            /orang
          </span>
        </p>
      </div>
    </div>
  );
};

export default PaketCard;
