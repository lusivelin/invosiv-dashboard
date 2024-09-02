import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@global-styles/global.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invosiv Dashboard",
  description: "Crafted by lusivelin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
