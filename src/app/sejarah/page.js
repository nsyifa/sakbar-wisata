"use client";
import Image from "next/image";
const greenFlowerSvg = "/assets/flower-hijau.svg";

export default function Sejarah() {
  return (
    <div
      className="relative bg-white pt-32 w-screen overflow-hidden"
      style={{ paddingBottom: "800px" }}
    >
      {/* Transparent PNG Overlay */}
      <div className="absolute inset-0 bg-[url('/images/bg-flowers.png')]"></div>

      <h1 className="z-20 relative text-6xl px-8 font-playfair font-bold text-sakbar-brown text-center">
        Sejarah Desa
      </h1>
      <div className="mt-12 w-full h-[1px] bg-sakbar-brown"></div>

      <div className="mt-12 relative z-20 w-full flex flex-col md:grid md:grid-cols-4 px-8 md:px-12 gap-8 md:grid-rows-3">
        <p className="md:col-span-2 font-koho text-justify text-base md:text-lg w-full">
          Desa Sakerta sebagai desa agraris dengan berbagai potensi pertaniannya
          menjadi sumber penghidupan bagi warganya. Seperti namanya, Sakerta
          yang diambil dari bahasa Sansekerta memiliki arti arah kebaikan juga
          diwujudkan dalam perkembangannya yang semakin hari penduduk desa
          sakerta semakin padat penduduk dengan produktivitasnya. Wilayah Desa
          Sakerta yang cenderung luas dan alat transportasi yang masih minim
          membuat beberapa warga di daerah Ciceuri (Dusun yang membawa kebaikan)
          terlalu kejauhan apabila harus mengurus administrasi ke Kantor Desa.
          Kemudian disertai aturan pemekaran desa dari pusat dan dilakukannya
          berbagai perundingan masyarakat yang akhirnya pada tahun 1977
          disepakati adanya pemekaran Desa Sakerta menjadi Desa Sakerta Barat
          dan Desa Sakerta Timur. Tokoh yang ikut serta dalam dinamika pemekaran
          Desa Sakerta Barat yaitu Bapak Sasmita Praja selaku kepala dusun, Pak
          Kyai Anas dan Pak Kyai No selaku tokoh masyarakat. Desa Sakerta Barat
          dipimpin oleh M. Saleh selaku Pejabat Kuwu sampai tahun 1979. Kemudian
          pada saat pemilihan kepala desa Bapak M. Saleh terpilih menjadi Kepala
          Desa Sakerta Barat mulai tahun 1979-1987.
        </p>

        <div className="bg-slate-300 w-full col-span-2 md:h-full h-72"></div>
        <div className="md:row-span-1 bg-slate-300 w-full md:col-span-4 md:h-full h-72"></div>

        <p className="md:col-span-2 font-koho text-justify text-base md:text-lg md:col-start-3 md:col-end-5">
          Desa Sakerta Barat sejak tahun 1977-sekarang masih menjadi desa yang
          berkecimpung di bidang pertanian. Keseharian masyarakat Desa Sakerta
          Barat sering melakukan perkumpulan warga desa. Bapak Karsono sebagai
          tokoh masyarakat di Desa Sakerta Barat sekaligus pelaku seni
          menyatakan bahwasanya masyarakat desa dulunya aktif di berbagai
          kesenian seperti wayang golek dan reog yang ditampilkan di kegiatan
          hajatan. Selain itu, masyarakat Desa Sakerta Barat juga turut aktif
          dalam perkumpulan-perkumpulan warga. Perkumpulan pencak silat,
          perkumpulan calung (kesenian yang terbuat dari bambu), dan qasidah.
          Seiring berjalannya waktu, masyarakat Desa Sakerta Barat yang
          cenderung mengarah ke desa agamis mengalami peralihan kebudayaan
          menuju budaya yang berbau Islami.
        </p>

        <div className="md:row-start-3 md:row-end-4 md:col-start-1 md:col-end-2 bg-slate-300 w-full md:h-full h-72"></div>
        <div className="md:row-start-3 md:row-end-4 md:col-start-2 md:col-end-3 bg-slate-300 w-full md:h-full h-72"></div>
      </div>
      <Image
        width={950}
        height={950}
        src={greenFlowerSvg}
        alt=""
        className="absolute z-20 sm:-left-[21rem] -left-[13rem] drop-shadow-xl rotate-[30deg] sm:bottom-16 bottom-[28rem]  "
      />
      <Image
        width={950}
        height={950}
        src={greenFlowerSvg}
        alt=""
        className="absolute z-20 sm:-right-[21rem] -right-[13rem] drop-shadow-xl rotate-[70deg] sm:-bottom-16 bottom-[21rem] "
      />
    </div>
  );
}
