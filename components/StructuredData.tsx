export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Gubug Teposeliro",
    image: "https://gubug-teposeliro.vercel.app/logo.png",
    url: "https://gubug-teposeliro.vercel.app",
    telephone: "+6281245682002",
    servesCuisine: "Indonesian",
    priceRange: "$",
    openingHours: "Mo-Sa 18:00",
    sameAs: [
      "https://instagram.com/gubug.teposeliro"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}