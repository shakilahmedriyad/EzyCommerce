import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Topper from "@/components/TooperSection/TopperSection";
import NavBar from "@/components/NavBar/NavBar";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "EzyCommerce",
  description:
    "A place where you can find your desired products with great price",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} w-full  antialiased`}
      >
        <Topper />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
