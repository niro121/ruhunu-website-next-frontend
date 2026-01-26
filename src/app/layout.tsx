import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import NavbarServerWrapper from "@/components/global/navbar/NavbarServerWrapper";
import FooterServerWrapper from "@/components/global/footer/FooterServerWrapper";

// -------------------- FONTS ------------------------
const openSans = localFont({
  src: [
    {
      path: "../../public/fonts/OpenSans-Regular.ttf",
      weight: "400",
    },
    
    {
      path: "../../public/fonts/OpenSans-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/OpenSans-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/OpenSans-ExtraBold.ttf",
      weight: "800",
    },
  ],
  variable: "--font-opensans",
  display: "swap",
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
        className={openSans.variable}
      >
        <NavbarServerWrapper/>
        {children}
        <FooterServerWrapper/>
      </body>
    </html>
  );
}
