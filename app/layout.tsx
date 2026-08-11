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
  title: "FARUQ DIGITAL HUB | Digital Services in Dandume",
  description:
    "FARUQ DIGITAL HUB provides printing, photocopying, NIN, CAC, JAMB, NYSC, typing, lamination, plastic ID cards and other digital services in Dandume, Katsina State.",
  keywords: [
    "FARUQ DIGITAL HUB",
    "Digital services Dandume",
    "Cyber cafe Dandume",
    "Printing services Dandume",
    "CAC registration Dandume",
    "NIN services Dandume",
    "JAMB registration Dandume",
    "NYSC registration Dandume",
    "Katsina digital services",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}