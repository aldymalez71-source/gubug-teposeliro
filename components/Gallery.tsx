"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const galleryImages = [
  "/gallery/gallery-1.jpg",
  "/gallery/gallery-2.jpg",
  "/gallery/gallery-3.jpg",
  "/gallery/gallery-4.jpg",
  "/gallery/gallery-5.jpg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
  const next = (currentIndex + 1) % galleryImages.length;
  setCurrentIndex(next);
  setSelectedImage(galleryImages[next]);
};

const prevImage = () => {
  const prev =
    (currentIndex - 1 + galleryImages.length) %
    galleryImages.length;

  setCurrentIndex(prev);
  setSelectedImage(galleryImages[prev]);
};
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setSelectedImage(null);
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () =>
    window.removeEventListener("keydown", handleKeyDown);
}, []);
  return (
    <section id="gallery" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-amber-700">
          Galeri Gubug Teposeliro
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12">
          Suasana hangat, nyaman, dan penuh kebersamaan.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">

          {galleryImages.map((image, index) => (
            <div
  key={index}
  onClick={() => {
  setCurrentIndex(index);
  setSelectedImage(image);
}}
  className="overflow-hidden rounded-2xl shadow-lg cursor-pointer"
 >

              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                width={500}
                height={500}
                loading="lazy"
                quality={85}
                className="w-full h-64 object-cover hover:scale-110 transition duration-500"
              />
            </div>
            
          ))}

        </div>

      </div>
      {selectedImage && (
  <div
    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
    onClick={() => setSelectedImage(null)}
  >
    {/* Tombol Close */}
    <button
      onClick={() => setSelectedImage(null)}
      className="absolute top-6 right-6 text-white text-5xl hover:text-amber-400 transition"
    >
      ×
    </button>

    {/* Tombol Sebelumnya */}
    <button
      onClick={(e) => {
        e.stopPropagation();
        prevImage();
      }}
      className="absolute left-5 md:left-10 text-white text-5xl hover:text-amber-400 transition"
    >
      ❮
    </button>

    {/* Foto */}
    <div
      onClick={(e) => e.stopPropagation()}
      className="px-16"
    >
      <Image
        src={selectedImage}
        alt="Preview"
        width={1600}
        height={1200}
        className="w-auto h-auto max-w-[90vw] max-h-[85vh] object-contain rounded-2xl shadow-2xl"
      />
    </div>

    {/* Tombol Berikutnya */}
    <button
      onClick={(e) => {
        e.stopPropagation();
        nextImage();
      }}
      className="absolute right-5 md:right-10 text-white text-5xl hover:text-amber-400 transition"
    >
      ❯
    </button>

    {/* Informasi */}
    <div className="absolute bottom-6 text-center text-gray-300 text-sm">
      Klik area gelap atau tekan ESC untuk menutup
    </div>
  </div>
)}
    </section>
  );
}