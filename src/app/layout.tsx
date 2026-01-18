import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mạc Phạm Thiên Long | AI Engineer Portfolio",
  description: "End-to-End AI Systems Engineer specializing in Deep Learning, MLOps, and Scalable System Design. Building production-grade AI solutions with LightGCN, Kafka, and modern microservices.",
  keywords: ["AI Engineer", "Machine Learning", "Deep Learning", "MLOps", "Portfolio", "LightGCN", "Recommendation System"],
  authors: [{ name: "Mạc Phạm Thiên Long" }],
  openGraph: {
    title: "Mạc Phạm Thiên Long | AI Engineer Portfolio",
    description: "End-to-End AI Systems Engineer specializing in Deep Learning, MLOps, and Scalable System Design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
