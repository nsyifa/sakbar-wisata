"use client";

import EdukasiCard from "../components/EdukasiCard";

export default function WisataEdukasi() {
  return (
    <div className="relative bg-white pt-32 w-screen overflow-hidden pb-36">
      {/* Transparent PNG Overlay */}
      <div className="absolute inset-0 bg-[url('/images/bg-flowers.png')]"></div>

      <h1 className="z-20 relative text-6xl font-playfair px-8 font-bold text-sakbar-brown text-center">
        Wisata Edukasi
      </h1>
      <div className="mt-12 w-full h-[1px] bg-sakbar-brown"></div>

      <div className="mt-12 w-screen px-5 sm:px-10 md:px-28">
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-10">
          <EdukasiCard
            images={[
              "/images/edukasi/singkong1.jpg",
              "/images/edukasi/singkong2.jpg",
              "/images/edukasi/singkong3.jpg",
            ]}
            title="Keripik Singkong"
            desc="Pada wisata edukasi keripik singkong, wisatawan akan diajak menelusuri sejarah pembuatan keripik singkong di Desa Sakerta Barat, pengalaman langsung pembuatan singkong dari bahan mentah menjadi sebuah produk yang memiliki nilai jual, belajar pengemasan dan pemasaran keripik singkong, dan dapat membawa pulang serta merasakan langsung produk keripik singkong ini."
            price="Rp 30.000/orang minimal 10 orang"
          />
          <EdukasiCard
            images={[
              "/images/edukasi/pisang1.jpg",
              "/images/edukasi/pisang2.jpg",
              "/images/edukasi/pisang3.jpg",
            ]}
            title="Keripik Pisang"
            desc="Pada wisata edukasi keripik pisang, wisatawan akan diajak menelusuri sejarah pembuatan keripik pisang di Desa Sakerta Barat, pengalaman langsung pembuatan keripik pisang dari bahan mentah menjadi sebuah produk yang memiliki nilai jual, belajar pengemasan dan pemasaran keripik pisang, dan dapat membawa pulang serta merasakan langsung produk keripik pisang ini."
            price="Rp 30.000/orang minimal 10 orang"
          />
          <EdukasiCard
            images={[
              "/images/edukasi/rengginang1.jpg",
              "/images/edukasi/rengginang2.jpg",
              "/images/edukasi/rengginang3.jpg",
            ]}
            title="Rengginang"
            desc="Pada wisata edukasi rengginang, wisatawan akan diajak menelusuri sejarah pembuatan rengginang di Desa Sakerta Barat, pengalaman langsung pembuatan rengginang dari bahan mentah menjadi sebuah produk yang memiliki nilai jual, belajar pengemasan dan pemasaran rengginang, dan dapat membawa pulang serta merasakan langsung produk rengginang ini."
            price="Rp 30.000/orang minimal 10 orang"
          />
          <EdukasiCard
            images={[
              "/images/edukasi/gemblong1.jpg",
              "/images/edukasi/gemblong2.jpg",
              "/images/edukasi/gemblong3.jpg",
            ]}
            title="Gemblong"
            desc="Pada wisata edukasi gemblong, wisatawan akan diajak menelusuri sejarah pembuatan gemblong di Desa Sakerta Barat, pengalaman langsung pembuatan gemblong dari bahan mentah menjadi sebuah produk yang memiliki nilai jual, belajar pengemasan dan pemasaran gemblong, dan dapat membawa pulang serta merasakan langsung produk gemblong ini."
            price="Rp 30.000/orang minimal 10 orang"
          />
          <EdukasiCard
            images={[
              "/images/edukasi/kriya1.jpg",
              "/images/edukasi/kriya2.jpg",
              "/images/edukasi/kriya3.jpg",
            ]}
            title="Kriya"
            desc="Pada wisata edukasi kriya, wisatawan akan diajak menelusuri sejarah pembuatan  kriya di Desa Sakerta Barat, pengalaman langsung pembuatan kriya dari bahan mentah menjadi sebuah produk yang memiliki nilai jual, belajar pengemasan dan pemasaran  kriya, dan dapat membawa pulang serta merasakan langsung produk kriya ini."
            price="Rp 30.000/orang minimal 10 orang"
          />
          <EdukasiCard
            images={[
              "/images/edukasi/gulamerah1.jpg",
              "/images/edukasi/gulamerah2.jpeg",
              "/images/edukasi/gulamerah3.jpg",
            ]}
            title="Gula Merah"
            desc="Pada wisata edukasi gula merah, wisatawan akan diajak menelusuri sejarah pembuatan gula merah di Desa Sakerta Barat, pengalaman langsung pembuatan gula merah dari bahan mentah menjadi sebuah produk yang memiliki nilai jual, belajar pengemasan dan pemasaran gula merah, dan dapat membawa pulang serta merasakan langsung produk gula merah ini."
            price="Rp 20.000/orang minimal 10 orang"
          />
          <EdukasiCard
            images={[
              "/images/edukasi/tahu1.jpg",
              "/images/edukasi/tahu2.jpg",
              "/images/edukasi/tahu3.jpeg",
            ]}
            title="Tahu"
            desc="Pada wisata edukasi tahu, wisatawan akan diajak menelusuri sejarah pembuatan tahu di Desa Sakerta Barat, pengalaman langsung pembuatan tahu dari bahan mentah menjadi sebuah produk yang memiliki nilai jual, belajar pengemasan dan pemasaran tahu, dan dapat membawa pulang serta merasakan langsung produk tahu ini."
            price="Rp 20.000/orang minimal 10 orang"
          />
          <EdukasiCard
            images={[
              "/images/edukasi/ternak1.jpg",
              "/images/edukasi/ternak2.jpg",
              "/images/edukasi/ternak3.jpg",
            ]}
            title="Ternak Ayam dan Ikan"
            desc="Pada wisata edukasi ternak ayam dan ikan, wisatawan akan diajak menelusuri sejarah ternak ayam dan ikan di Desa Sakerta Barat, pengalaman langsung ternak ayam dan ikan yang dapat menjadi sebuah produk dengan memiliki nilai jual, belajar pengemasan dan pemasaran hasil ternak, dan dapat membawa pulang serta merasakan langsung produk hasil ternak ini."
            price="Rp 30.000/orang minimal 15 orang"
          />
          <EdukasiCard
            images={[
              "/images/edukasi/karodeh1.jpg",
              "/images/edukasi/karodeh2.jpg",
              "/images/edukasi/karodeh3.jpg",
            ]}
            title="Kodehel"
            desc="Pada wisata edukasi kodehel, wisatawan akan diajak menelusuri sejarah pembuatan kodehel di Desa Sakerta Barat, pengalaman langsung pembuatan kodehel dari bahan mentah menjadi sebuah produk yang memiliki nilai jual, belajar pengemasan dan pemasaran kodehel, dan dapat membawa pulang serta merasakan langsung produk kodehel ini."
            price="Rp 30.000/orang minimal 10 orang"
          />
        </div>
      </div>
    </div>
  );
}
