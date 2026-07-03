export default function Features() {
  const features = [
    {
      title: "Suasana Tradisional",
      desc: "Nuansa khas Jawa yang nyaman untuk berkumpul bersama keluarga dan teman.",
      icon: "🏡",
    },
    {
      title: "Menu Beragam",
      desc: "Mie ayam, aneka sate, wedang, rempah, hingga minuman segar.",
      icon: "🍜",
    },
    {
      title: "Karaoke",
      desc: "Nikmati hiburan karaoke sambil bersantai.",
      icon: "🎤",
    },
    {
      title: "Cocok untuk Komunitas",
      desc: "Tempat nyaman untuk nongkrong, rapat, dan gathering komunitas.",
      icon: "👥",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-amber-700">
          Kenapa Memilih Gubug Teposeliro?
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Lebih dari sekadar tempat makan, kami menghadirkan pengalaman berkumpul yang hangat.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item) => (
            <div
              key={item.title}
              className="bg-[#F8F5EF] rounded-2xl p-8 shadow hover:shadow-xl transition"
            >
              <div className="text-5xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}