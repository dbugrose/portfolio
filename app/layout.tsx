import type { Metadata } from "next";
import "./globals.css";
import { Sour_Gummy, Meow_Script, Geist, Geist_Mono } from 'next/font/google';
import LocalFont from "next/font/local";
import NavComponent from "./components/NavComponent";


const meowScript = Meow_Script({
  subsets: ['latin'],
  weight: '400', 
  variable: '--font-meow-script', 
});

const sourGummy = Sour_Gummy({
  subsets: ['latin'],
  variable: '--font-sour-gummy', 
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Darcy Rose, Web Developer",
  description: "a web development portfolio for Darcy Rose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourGummy.className} ${meowScript.variable} antialiased`}
      ><NavComponent/>
        {children}
      </body>
    </html>
  );
}
