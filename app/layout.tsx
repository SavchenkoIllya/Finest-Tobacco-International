import { ReactNode } from "react";
import "./globals.css";
import { Bebas_Neue, Montserrat, Merriweather } from "next/font/google";
import type { Metadata } from "next";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Finest Tobacco",
  description: "Finest Tobacco IG",
};

export default async function GlobalLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang={"en"}>
      <head>
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body>
        <main
          className={`${bebas.variable} ${montserrat.variable} ${merriweather.variable} antialiased overflow-hidden`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
