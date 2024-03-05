import type { Metadata } from "next";
import { Henny_Penny, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { hennyPenny } from "@/utils/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hennyPenny.className} bg-white`}>
        <Navbar hennyPenny={hennyPenny} />
        {children}
      </body>
    </html>
  );
}
