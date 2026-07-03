export default function FAQ() {
  const faqs = [
    {
      question: "Apakah tersedia parkir?",
      answer:
        "Ya. Tersedia area parkir motor dan mobil di depan Pujasera Kebondanu.",
    },
    {
      question: "Apakah menerima pembayaran QRIS?",
      answer:
        "Ya. Kami menerima pembayaran tunai maupun QRIS.",
    },
    {
      question: "Apakah tersedia WiFi?",
      answer:
        "Ya. WiFi gratis tersedia untuk seluruh pelanggan.",
    },
    {
      question: "Jam operasional?",
      answer:
        "Senin – Sabtu, pukul 18.00 – 01.00 WIB.",
    },
    {
      question: "Apakah tersedia karaoke?",
      answer:
        "Ya. Kami menyediakan fasilitas karaoke untuk menemani waktu berkumpul Anda.",
    },
    {
      question: "Apakah cocok untuk acara komunitas atau keluarga?",
      answer:
        "Sangat cocok. Gubug Teposeliro sering menjadi tempat berkumpul keluarga, teman, maupun komunitas.",
    },
  ];

  return (
    <section id="faq" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-amber-700">
          Pertanyaan yang Sering Diajukan
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12">
          Berikut beberapa informasi yang sering ditanyakan oleh pelanggan.
        </p>

        <div className="space-y-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#F8F5EF] rounded-2xl p-6 shadow-md"
            >
              <h3 className="text-xl font-bold text-amber-700">
                {faq.question}
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                {faq.answer}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}