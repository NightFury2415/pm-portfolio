import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project Manager Resume",
  description: "Made by Dev Modi",
  generator: "Dev Modi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
