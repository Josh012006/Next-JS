import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import GoUp from "@/components/GoUp";
import ReduxProvider from "@/redux/Provider";
import ThemeChanger from "@/components/ThemeChanger";




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
        <script src="https://kit.fontawesome.com/f1ed3a95ea.js" crossOrigin="anonymous" defer></script>
      </head>
      <body className="relative">
        <ReduxProvider>
          <Header />
          <Main>
            {children}
          </Main>
          <ThemeChanger />
          <GoUp />
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
