import Image from "next/image";
import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col-reverse items-center justify-between py-12 md:flex-row md:py-20">
      <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-1/2">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-6xl">
          Hi, I&apos;m a Telecomm Engineer
        </h1>
        <p className="max-w-lg mb-8 text-xl text-gray-600 leading-relaxed">
          Mahasiswa Teknik Telekomunikasi semester 6 yang fokus pada Network Security, 4G/5G Architecture, dan Deep Learning.
        </p>
        <div className="flex space-x-4">
          <a href="#projects" className="px-8 py-3 text-white transition bg-blue-600 rounded-xl hover:bg-blue-700 font-semibold text-lg">
            View My Work
          </a>
        </div>
      </div>
      <div className="flex justify-center w-full mb-10 md:w-1/2 md:mb-0">
        <Image
          src={heroImage} 
          alt="Ilustrasi engineer telekomunikasi"
          priority
          className="w-full max-w-md rounded-2xl shadow-2xl transition-transform hover:scale-105 duration-300" 
        />
      </div>
    </section>
  );
}
