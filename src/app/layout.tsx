import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";

// -------------------- FONTS ------------------------
const opensansbold =  ({
  src: [
    {
      path: "./fonts/opensans-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-opensans-bold",
});

const opensansmedium = ({
  src: [
    {
      path: "./fonts/opensans-medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-opensans-medium",
});

const opensansregular = ({
  src: [
    {
      path: "./fonts/opensans-regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-opensans-regular",
});

const opensansextrabold = ({
  src: [
    {
      path: "./fonts/opensans-extrabold.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-opensans-extrabold",
});

export const metadata: Metadata = {
  title: "Ruhunu Hospital",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${opensansbold.variable} ${opensansmedium.variable} ${opensansregular.variable} ${opensansextrabold.variable}`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
