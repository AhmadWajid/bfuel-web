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
  title: "Bfuel - Smart Meal Planning for College Students",
  description: "Effortlessly log your meals, track calories, snap food photos, and monitor your nutrition goals—all in one sleek app designed for college dining halls.",
  keywords: ["college dining", "meal tracking", "nutrition app", "campus dining", "food logging", "calorie tracking", "UCLA", "college students", "health app"],
  authors: [{ name: "Ahmad Wajid" }],
  creator: "Ahmad Wajid",
  publisher: "Bfuel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bfuel-web.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bfuel - Smart Meal Planning for College Students",
    description: "Effortlessly log your meals, track calories, snap food photos, and monitor your nutrition goals—all in one sleek app designed for college dining halls.",
    url: "https://bfuel-web.vercel.app",
    siteName: "Bfuel",
    images: [
      {
        url: "/images/home-dashboard.png",
        width: 192,
        height: 410,
        alt: "Bfuel Home Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bfuel - Smart Meal Planning for College Students",
    description: "Effortlessly log your meals, track calories, snap food photos, and monitor your nutrition goals—all in one sleek app designed for college dining halls.",
    images: ["/images/home-dashboard.png"],
    creator: "@AhmadWajid",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
