import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SS Jewelry Store",
  description: "Exquisite jewelry from SS Jewelry Store",
};

export default function RootLayout({
  children,
}: 
{
  children: React.ReactNode;
}) 

{
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="bg-green-300 flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
