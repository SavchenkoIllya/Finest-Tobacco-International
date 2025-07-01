import { ReactNode } from "react";
import "./globals.css";
import { Bebas_Neue, Montserrat, Merriweather } from "next/font/google";
import type { Metadata } from "next";
import { Locale } from "@/app/types";
import { axiosClient, LocalStorageNames, StrapiRoutes } from "@/app/lib";
import { globalQuery } from "@/app/actions";

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
