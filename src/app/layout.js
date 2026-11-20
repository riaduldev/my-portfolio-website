
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
  title: "Riadul Islam | MERN Stack Developer",
  description:
    "Portfolio of Riadul Islam, a MERN Stack Developer skilled in MongoDB, Express.js, React, Node.js, and modern web technologies.",
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
