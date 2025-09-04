import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AOSProvider } from "./components/AOSProvider";

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
  description: "Manifeste a sua identidade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-screen scroll-smooth">
      <body
        className={`${poppins.variable} flex min-h-screen flex-col antialiased`}
      >
        <AOSProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AOSProvider>
      </body>
    </html>
  );
}
