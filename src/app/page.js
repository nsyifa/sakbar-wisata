import Image from "next/image";

const heroPic = "/images/hero.png";

export default function Home() {
  return (
    <div className="w-screen bg-slate-300">
      <div
        className="w-full h-screen bg-fixed"
        style={{ backgroundImage: `url(${heroPic})` }}
      >
        <div
          className="flex flex-row items-center justify-center w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(8, 12, 16, 0) 0%, rgba(53, 94, 59, 0.5) 100%)",
          }}
        >
          <div className="w-max font-playfair font-bold text-7xl text-white tracking-[3.5px] text-center">
            Jelajah <br /> Sakerta Barat
          </div>
        </div>
      </div>
      <div className="bg-white h-screen"></div>
    </div>
  );
}
