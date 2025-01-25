"use client";
import Image from "next/image";

const EdukasiCard = ({ title, desc, image, price }) => {
  return (
    <div className="rounded-[20px] overflow-hidden shadow-lg bg-white relative z-20 border-[1px] border-sakbar-brown font-koho">
      <a href="#"></a>
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt="Sunset in the mountains"
          className="object-cover"
          fill
        />
        {/* <div className="absolute bottom-0 font-bold left-0 bg-sakbar-green px-4 py-2 text-white text-sm">
          Rp 20.000/orang minimal 10 orang
        </div> */}
      </div>
      <div className="px-6 py-4">
        <span className="font-bold text-2xl inline-block font-playfair text-sakbar-brown">
          {title}
        </span>
        <p className="mt-2 text-gray-600 text-base font-koho text-justify">
          {desc}
        </p>
      </div>
      <div className="px-6 py-4 flex flex-row items-center">
        <span
          href="#"
          className="font-bold py-1 text-base font-regular text-sakbar-brown mr-1 flex flex-row justify-between items-center"
        >
          <span className="ml-1">{price}</span>
        </span>
      </div>
    </div>
  );
};

export default EdukasiCard;
