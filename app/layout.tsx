import React from "react";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hariharan S",
  description:
    "Portfolio of Hariharan S — an AI & Machine Learning Engineer specialising in data science, deep learning, NLP, and generative AI. Building intelligent systems that turn data into real-world solutions.",
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
