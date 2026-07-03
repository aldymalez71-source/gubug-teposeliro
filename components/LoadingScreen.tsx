"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div
  className={`fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#2C241C]
  transition-all duration-700
  ${
    loading
      ? "opacity-100 visible"
      : "opacity-0 invisible"
  }`}
>
      <Image
        src="/logo/logo.png"
        alt="Logo Gubug Teposeliro"
        width={120}
        height={120}
        priority
      />

      <h1 className="mt-6 text-3xl font-bold text-white">
        Gubug Teposeliro
      </h1>

      <p className="mt-2 text-amber-300 italic">
        Guyub ing Rasa, Tepo ing Ati.
      </p>

      <div className="mt-8 flex gap-2">
        <div className="h-3 w-3 animate-bounce rounded-full bg-amber-400"></div>
        <div
          className="h-3 w-3 animate-bounce rounded-full bg-amber-400"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="h-3 w-3 animate-bounce rounded-full bg-amber-400"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
    </div>
  );
}