import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AOSProvider } from "./components/AOSProvider";
import { Toaster } from "@/components/ui/sonner";

import { Header } from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Bonetto - Manifeste a sua identidade",
  description: "A opção certa para tornar a sua marca mais forte.",
  icons: {
    icon: "/B.ico",
    shortcut: "/B.ico",
    apple: "/B.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-screen scroll-smooth">
      <head>
        <link rel="preload" as="image" href="/background/home-background.png" />
        <link rel="preload" as="image" href="/background/carimbo.png" />
      </head>
      <body
        className={`${poppins.variable} flex min-h-screen flex-col antialiased`}
      >
        <AOSProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Toaster />
          <Footer />
        </AOSProvider>
      </body>
    </html>
  );
}
