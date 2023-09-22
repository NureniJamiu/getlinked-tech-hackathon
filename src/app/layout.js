import Navbar from "@/components/Navbar";
import "./globals.css";
import { Montserrat, Unica_One } from "next/font/google";
import localFont from "next/font/local";

const montserrat = Montserrat({ subsets: ["latin"] });
const unica_one = Unica_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-unica-one",
});

const clash_display = localFont({
  src: "../font/clash-display/Fonts/WEB/fonts/ClashDisplay-Bold.ttf",
  display: "swap",
  variable: "--font-clash-display",
});

export const metadata = {
  title: "getLinked AI",
  description: "Getlinked AI Hackathon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${clash_display.variable} ${unica_one.variable} bg-[#150E28] text-[#fff] max-w-7xl mx-auto overflow-x-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
