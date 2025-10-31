import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import OverlayCross from "@/components/Cross";
import Footer from "@/components/ui/footer";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Studio Adorante",
  description: "Studio Professionale Abruzzo — Ristrutturazioni, design e ingegneria in Abruzzo. Richiedi ora un preventivo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${inter.variable}`}
      >
        {/*</OverlayCross> */}
        <Navbar/>
        {children}
        <Footer/>
        
      </body>
    </html>
  );
}
