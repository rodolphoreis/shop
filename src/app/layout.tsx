import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrimeShop",
  description: "Loja virtual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
