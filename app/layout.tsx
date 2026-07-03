import type { Metadata } from "next";
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