"use client";
import PaketCard from "../components/PaketCard";

export default function PaketWisata() {
  return (
    <div className="relative bg-white pt-32 w-screen overflow-hidden pb-36">
      {/* Transparent PNG Overlay */}
      <div className="absolute inset-0 bg-[url('/images/bg-flowers.png')]"></div>

      <h1 className="z-20 relative text-6xl font-playfair px-8 font-bold text-sakbar-brown text-center">
        Paket Wisata
      </h1>
      <div className="mt-12 w-full h-[1px] bg-sakbar-brown"></div>
      <div className="w-full  px-5 sm:px-12 xl:px-48 pt-16 flex flex-col justify-center items-center gap-8">
        <PaketCard
          images={[
            "/images/paket/paket11.jpg",
            "/images/paket/paket12.jpg",
            "/images/paket/paket13.jpg",
            "/images/paket/paket14.jpg",
          ]}
          title="Paket Jelajah Kuliner Sakbar"
          desc="Pada paket 75.000 ini, wisatawan mendapatkan pengalaman menelusuri empat wisata edukasi sejarah kuliner yaitu singkong, kodehel, gemblong, dan kripik pisang. Hal ini membuat para wisatawan merasakan pengalaman langsung pembuatan singkong, kodehel, gemblong, dan kripik pisang. dari bahan mentah menjadi sebuah produk yang memiliki nilai jual, belajar pengemasan dan pemasaran kodehel, dan dapat membawa pulang serta merasakan langsung produk singkong, kodehel, gemblong, dan kripik pisang ini."
          price="75.000"
        ></PaketCard>

        <PaketCard
          images={[
            "/images/paket/paket21.jpg",
            "/images/paket/paket22.jpg",
            "/images/paket/paket23.jpg",
            "/images/paket/paket24.jpg",
          ]}
          title="Paket Walking Tour"
          desc="Pada paket 70.000 ini, wisatawan mendapatkan pengalaman edukasi sejarah menelusuri tempat bersejarah dan eksplore wilayah Desa Sakerta Barat. Rute walking tour ini dimulai dari Balai Desa Sakerta Barat kemudian menuju makam eyang Dayi kemudian ke arah persawahan, bukit pinus, dan finish di Taman Bunut. Dalam penelusuran sejarah ini, wisatawan sudah mendapatkan konsumsi, leaflet, sticker, dan ilmu yang berharga."
          price="70.000"
        ></PaketCard>
        <PaketCard
          images={[
            "/images/paket/paket33.jpg",
            "/images/paket/paket32.jpg",
            "/images/paket/paket31.jpg",
            "/images/paket/paket34.jpg",
          ]}
          title="Paket Premium Jejak Sakerta Barat"
          desc="Pada paket premium ini, wisatawan diajak untuk mengeksplore wilayah dan juga kuliner Desa Sakerta Barat. Dalam jejak langkah ini, dimulai dari pagi hari dengan walking tour kemudian dilanjut siang hari belajar bersama di UMKM singkong dan pisang yang ada di Desa Sakerta Barat. Pengalaman berharga ini yang akan menjadi nilai jual dari para wisatawan khususnya Gen Z melalui ciri khas dan keunikan dari produk wisata ini."
          price="150.000"
        ></PaketCard>
      </div>
    </div>
  );
}
