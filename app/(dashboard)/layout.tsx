import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "../globals.css";
import Topper from "@/components/TooperSection/TopperSection";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

// const geistSans = localFont({
//   src: "../fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "../fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const popins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
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
      <body className={`${popins.className} w-full  antialiased`}>
        <Topper />
        <NavBar />
        <div className="min-h-[66vh]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
