import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dilip Kumar Narasimhalu's | Portfolio",
  description:
    "Frontend JavaScript Engineer with 12+ years of experience delivering scalable, high-performance applications using React.js, Next.js, Node.js, and TypeScript. Expertise performance optimization (reducing load times by up to 25%), scalable micro-frontends, responsive UI, and secure API integration. Strong background in ecommerce platforms, improving checkout conversions by 18%. Experienced in Agile delivery, cloud-based deployments (Azure), and CI/CD pipelines. Dilip Kumar Narasimhalu's Responsive portfolio built with Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
