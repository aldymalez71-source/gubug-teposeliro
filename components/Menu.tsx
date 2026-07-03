"use client";

import { useState } from "react";
import Image from "next/image";
import { menuItems } from "@/data/menu";

export default function Menu() {
  const [filter, setFilter] = useState("Semua");

  const filteredMenu =
  filter === "Semua"
    ? menuItems
    : menuItems.filter((item) => item.category === filter);

  return (
    <section id="menu" className="bg-[#f8f5ef] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-amber-700">
          Menu Favorit
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12">
          Menu Andalan Gubug Teposeliro
        </p>
        <div className="mb-12 flex flex-wrap justify-center gap-3">
  {["Semua", "Makanan", "Minuman", "Minuman Dingin"].map((category) => (
    <button
      key={category}
      onClick={() => setFilter(category)}
      className={`rounded-full px-5 py-2 font-semibold transition ${
        filter === category
          ? "bg-amber-700 text-white"
          : "bg-white text-amber-700 border border-amber-700 hover:bg-amber-700 hover:text-white"
      }`}
    >
      {category}
    </button>
  ))}
</div>
      

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {filteredMenu.map((item) => (
            <div
  key={item.name}
  className="group relative overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
>
              <div className="overflow-hidden">
                {item.bestseller && (
  <div className="absolute top-4 left-4 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
    ⭐ Best Seller
  </div>
)}
  <Image
    src={item.image}
    alt={item.name}
    width={500}
    height={400}
    className="w-full h-72 object-cover object-center hover:scale-110 transition-transform duration-500"
  />
</div>

              <div className="flex h-270px flex-col p-5">
                <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-700">
  {item.category}
</span>

               <h3 className="mt-2 min-h-64px text-xl font-bold transition-colors duration-300 hover:text-amber-700">
  {item.name}
</h3>

                <div className="mt-5 flex items-center justify-between">

  <p className="text-2xl font-extrabold text-amber-700">
    {item.price}
  </p>

  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
    Fresh
  </span>

</div>
<a
  href={`https://wa.me/6281245682002?text=${item.message}`}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-auto block w-full rounded-xl bg-green-600 py-3 text-center font-semibold text-white transition hover:bg-green-700"
>
  🟢 Pesan via WhatsApp
</a>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}