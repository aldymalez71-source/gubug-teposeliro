import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gubug-teposeliro.vercel.app"),
  verification: {
  google: "BWIUV9mXa6v7vWZgSgxT0uHE73Dk938ed8cbH6PVlqk",
},

  title: "Gubug Teposeliro | Kuliner & Wedangan Khas Jawa",

  description:
    "Nikmati kuliner Nusantara, wedangan hangat, karaoke, dan suasana khas Jawa di Gubug Teposeliro, Pujasera Kebondanu, Sukorejo, Pasuruan.",

  keywords: [
    "Gubug Teposeliro",
    "Pujasera Kebondanu",
    "Kuliner Sukorejo",
    "Wedangan Pasuruan",
    "Karaoke Sukorejo",
    "Mie Ayam Sukorejo",
    "Angkringan Pasuruan",
    "Tempat Nongkrong Sukorejo",
  ],

  authors: [{ name: "Gubug Teposeliro" }],

  creator: "Gubug Teposeliro",

  applicationName: "Gubug Teposeliro",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Gubug Teposeliro | Kuliner & Wedangan Khas Jawa",
    description:
      "Nikmati kuliner Nusantara, wedangan hangat, karaoke, dan suasana khas Jawa di Pujasera Kebondanu.",
    url: "https://gubug-teposeliro.vercel.app",
    siteName: "Gubug Teposeliro",
    locale: "id_ID",
    type: "website",
    images: ["/og-image.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gubug Teposeliro | Kuliner & Wedangan Khas Jawa",
    description:
      "Nikmati kuliner Nusantara, wedangan hangat, karaoke, dan suasana khas Jawa.",
    images: ["/og-image.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
    <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-0G2SVTX699"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-0G2SVTX699');
  `}
</Script>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}