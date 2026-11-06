
import Marquee from "@/components/Marquee";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";


const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Riadul Islam | Frontend Developer",
  description:
    "Portfolio of Riadul Islam, a Frontend Developer skilled in React, Next.js, TypeScript, and modern web technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Navbar></Navbar>
        <Marquee></Marquee>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
