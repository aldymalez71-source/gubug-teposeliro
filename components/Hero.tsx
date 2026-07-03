import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen">
      {/* Background */}
      <Image
        src="/images/hero.jpg"
        alt="Hero"
        fill
        priority
        className="object-cover animate-slowZoom"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Isi Hero */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">

        <Image
  src="/logo/logo.png"
  alt="Logo Gubug Teposeliro"
  width={140}
  height={140}
  className="drop-shadow-2xl hover:scale-110 transition duration-500"
/>

        <h1 className="mt-8 text-4xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">
          Gubug Teposeliro
        </h1>

        <p className="mt-4 text-lg sm:text-xl md:text-2xl italic text-amber-300">
          Guyub ing Rasa, Tepo ing Ati.
        </p>

       <p className="mt-6 max-w-3xl text-base sm:text-lg md:text-xl leading-8 text-gray-200">
          Tempat berkumpul menikmati kuliner Nusantara, wedangan hangat,
          karaoke, dan suasana kebersamaan khas Jawa.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">

          <a
            href="#menu"
            className="rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-amber-700 hover:scale-105 active:scale-95"
          >
            Lihat Menu
          </a>

          <a
            href="https://wa.me/6281245682002"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white px-6 py-3 text-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 active:scale-95"
          >
            WhatsApp
          </a>

        </div>

      </div>

    </section>
  );
}