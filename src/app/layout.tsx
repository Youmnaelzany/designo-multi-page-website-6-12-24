import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const jost = Jost({
  variable: "--font-jost",
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Designo",
  description: "Designo agency website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} box-border m-0 p-0 max-h-[10000vh] max-w-[90rem] antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
