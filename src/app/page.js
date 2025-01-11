import Image from "next/image";
// import FlowerSvg from "..../assets/fourp-flower.svg";

const heroPic = "/images/hero.jpg";
const flowerSvg = "./assets/fourp-flower.svg";

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>

            <div className="border-white/40 border-[1px] font-playfair  bg-white/5 text-white px-8 pt-5 pb-7 backdrop-blur-sm cursor-pointer hover:-translate-x-0.5 hover:-translate-y-1 transition-all duration-300 ease-in-out w-96">
              <h2 className="font-semibold text-2xl tracking-[0.5px]">
                Sejarah Sakerta Barat
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-screen"></div>
    </div>
  );
}
