import type { Metadata } from "next";
import { Manrope, Public_Sans } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";
import { Analytics } from "@vercel/analytics/next";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "James Skinner — Product Designer",
  description:
    "Portfolio of James Skinner, a London-based Product Designer specialising in fintech and sports-tech.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${publicSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#0d0d0d]">
        <LoadingScreen />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
