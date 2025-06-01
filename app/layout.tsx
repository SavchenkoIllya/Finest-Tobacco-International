import { ReactNode } from "react";
import "./globals.css";

export default async function GlobalLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  return (
    <html lang={lang ?? "en"}>
      <body>{children}</body>
    </html>
  );
}
