export default function Footer() {
  return (
    <footer className="bg-[#2C241C] text-white pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-amber-400">
            Gubug Teposeliro
          </h2>

          <p className="mt-4 text-gray-300 leading-7">
            Tempat berkumpul menikmati kuliner Nusantara, wedangan hangat,
            karaoke, dan suasana khas Jawa yang nyaman bersama keluarga,
            sahabat, maupun komunitas.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-xl font-semibold text-amber-400">
            Navigasi
          </h3>

          <ul className="mt-4 space-y-3 text-gray-300">
            <li><a href="#hero" className="hover:text-amber-300">Beranda</a></li>
            <li><a href="#about" className="hover:text-amber-300">Tentang</a></li>
            <li><a href="#menu" className="hover:text-amber-300">Menu</a></li>
            <li><a href="#gallery" className="hover:text-amber-300">Galeri</a></li>
            <li><a href="#contact" className="hover:text-amber-300">Kontak</a></li>
          </ul>
        </div>

        {/* Informasi */}
        <div>
          <h3 className="text-xl font-semibold text-amber-400">
            Informasi
          </h3>

          <div className="mt-4 space-y-3 text-gray-300">
            <p>📍 Pujasera Kebondanu, Sukorejo, Pasuruan</p>
            <p>🕒 Senin – Sabtu</p>
            <p>18.00 – 01.00 WIB</p>

            <a
              href="https://wa.me/6281245682002"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-green-400"
            >
              📱 081245682002
            </a>

            <a
              href="https://instagram.com/gubug.teposeliro"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-pink-400"
            >
              📷 @gubug.teposeliro
            </a>
          </div>
        </div>

        {/* CTA */}
        <div>
          <h3 className="text-xl font-semibold text-amber-400">
            Reservasi
          </h3>

          <p className="mt-4 text-gray-300">
            Hubungi kami sekarang untuk reservasi tempat atau informasi
            mengenai menu dan acara.
          </p>

          <a
            href="https://wa.me/6281245682002"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 rounded-xl bg-green-600 px-6 py-3 font-semibold hover:bg-green-700 transition"
          >
            🟢 Chat WhatsApp
          </a>
        </div>

      </div>

      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Gubug Teposeliro. All Rights Reserved.
      </div>
    </footer>
  );
}