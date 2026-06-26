import type { Metadata } from "next";
import { Manrope, Public_Sans, Poppins, Hanken_Grotesk, Inter, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "James Skinner — Product Designer",
  description:
    "London-based Senior Product Designer specialising in UI/UX and Design engineering. View my portfolio featuring recent work for Moneybox and Voulez Vous.",
  openGraph: {
    title: "James Skinner — Product Designer",
    description:
      "London-based Senior Product Designer specialising in UI/UX and Design engineering.",
    url: "https://www.jamesskinner.xyz",
    siteName: "James Skinner",
    images: [
      {
        url: "https://www.jamesskinner.xyz/og-image.png",
        width: 1200,
        height: 630,
        alt: "James Skinner — Product Designer",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "James Skinner — Product Designer",
    description:
      "London-based Senior Product Designer specialising in UI/UX and Design engineering.",
    images: ["https://www.jamesskinner.xyz/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${publicSans.variable} ${poppins.variable} ${hanken.variable} ${inter.variable} ${montserrat.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#141414]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
