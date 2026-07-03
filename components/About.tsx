import Reveal from "./Reveal";
export default function About() {
  return (
    <section id="about" className="bg-white py-24 px-6">
     
      <Reveal>
    
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-amber-700">
          Tentang Gubug Teposeliro
        </h2>

        <p className="mt-8 text-center text-gray-600 max-w-3xl mx-auto leading-8">
          Gubug Teposeliro merupakan tempat berkumpul yang menghadirkan
          suasana hangat khas Jawa. Mengusung nilai tepo seliro,
          kami ingin setiap pengunjung merasa nyaman untuk menikmati
          makanan, wedangan, karaoke, hingga berbagi cerita bersama
          keluarga, sahabat, maupun komunitas.
        </p>

      </div>

      </Reveal>

    </section>
  );
}