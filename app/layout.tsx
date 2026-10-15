import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gamanext - Software Solutions",
  description: "High-performance modern software and digital web solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={quicksand.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}