import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";



export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Josué Mongan Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href= "/logo.png" sizes="16x16" />
        <script src="https://kit.fontawesome.com/f1ed3a95ea.js" crossOrigin="anonymous"></script>
      </head>
      <body>
        <Header />
        <main style={{minHeight: '604px'}} className="flex flex-col justify-between">
          {children}
        </main>
        <Footer />
        <script src="/myScript.js"></script>
      </body>
    </html>
  );
}
