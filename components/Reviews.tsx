export default function Reviews() {
  return (
    <section className="py-20 bg-[#F8F5EF]">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-amber-700">
          Ulasan Pelanggan
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Lihat pengalaman pelanggan yang telah berkunjung ke Gubug Teposeliro
          melalui Google Maps Pujasera Kebondanu.
        </p>

        <a
          href="https://maps.app.goo.gl/SGo4tZAubfWzkHsAA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 py-4 rounded-xl transition"
        >
          ⭐ Lihat Ulasan di Google
        </a>

      </div>
    </section>
  );
}