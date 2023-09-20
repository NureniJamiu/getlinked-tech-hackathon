import "./globals.css";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

const montserrat = Montserrat({ subsets: ["latin"] });

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
        className={`${montserrat.className} ${clash_display.variable} bg-[#150E28] text-[#fff]`}
      >
        {children}
      </body>
    </html>
  );
}
