export default function Facilities() {
  const facilities = [
    {
      icon: "🎤",
      title: "Karaoke",
      desc: "Nikmati hiburan karaoke bersama teman dan keluarga.",
    },
    {
      icon: "🚻",
      title: "Toilet Bersih",
      desc: "Toilet bersih dan nyaman untuk seluruh pengunjung.",
    },
    {
      icon: "🏡",
      title: "Area Indoor",
      desc: "Suasana tradisional Jawa yang nyaman untuk bersantai.",
    },
    {
      icon: "👥",
      title: "Tempat Komunitas",
      desc: "Cocok untuk gathering, rapat, dan acara komunitas.",
    },
    {
      icon: "🏍️",
      title: "Parkir Motor",
      desc: "Area parkir luas tepat di depan lokasi.",
    },
    {
      icon: "🚗",
      title: "Parkir Mobil",
      desc: "Parkir mobil tersedia di depan area Gubug Teposeliro.",
    },
    {
      icon: "📶",
      title: "WiFi Gratis",
      desc: "Akses internet gratis untuk seluruh pengunjung.",
    },
    {
      icon: "💳",
      title: "Tunai & QRIS",
      desc: "Pembayaran lebih mudah dengan Tunai maupun QRIS.",
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-[#F8F5EF]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-amber-700">
          Fasilitas
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12">
          Kami menyediakan berbagai fasilitas agar pengunjung merasa nyaman.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {facilities.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}