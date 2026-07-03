export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-amber-700">
          Kunjungi Gubug Teposeliro
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12">
          Kami siap menyambut Anda setiap hari dengan suasana hangat dan penuh teposeliro.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Informasi */}
          <div className="bg-[#F8F5EF] rounded-2xl p-8 shadow-lg">

            <h3 className="text-2xl font-bold mb-6">
              Informasi
            </h3>

            <div className="space-y-5">

              <div>
                <p className="font-semibold">📍 Alamat</p>
                <p>BumiDesa Suwayuwo</p>
                <p>Sukorejo, Pasuruan</p>
                <p>Jawa Timur</p>
              </div>

              <div>
                <p className="font-semibold">🕒 Jam Operasional</p>
                <p>Senin – Sabtu</p>
                <p>18.00 – 01.00 WIB</p>
              </div>

             <div>
  <p className="font-semibold">📱 WhatsApp</p>

  <a
    href="https://wa.me/6281245682002"
    target="_blank"
    rel="noopener noreferrer"
    className="text-green-600 font-medium hover:underline"
  >
    081245682002
  </a>
</div>

              <div>
  <p className="font-semibold">📷 Instagram</p>

  <a
    href="https://instagram.com/gubug.teposeliro"
    target="_blank"
    rel="noopener noreferrer"
    className="text-pink-600 font-medium hover:underline"
  >
    @gubug.teposeliro
  </a>
</div>

            </div>

          </div>

          {/* Tombol */}
          <div className="flex flex-col gap-6">

  {/* Google Maps */}
  <div className="rounded-2xl overflow-hidden shadow-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.9699971047235!2d112.70587547465607!3d-7.686368592330787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7d7bc38f14dff%3A0xa3104aa2e06b9891!2sPUJASERA%20KEBONDANU!5e0!3m2!1sid!2sid!4v1782993861688!5m2!1sid!2sid"
      width="100%"
      height="300"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
    />
  </div>

  {/* Tombol */}
  <div className="bg-[#F8F5EF] rounded-2xl p-6 shadow-lg flex flex-col gap-4">

    <a
      href="https://wa.me/6281245682002"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl text-center transition"
    >
      💬 Chat WhatsApp
    </a>

    <a
      href="https://instagram.com/gubug.teposeliro"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 rounded-xl text-center transition"
    >
      📷 Instagram
    </a>

  </div>

</div>
         

        </div>

      </div>
    </section>
  );
}