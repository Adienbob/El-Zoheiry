import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Providers from "./components/Provider";

export const metadata: Metadata = {
  title: "Alostaz | Industrial Gelatin Manufacturer & Exporter in Egypt",
  description: "Alostaz is a leading manufacturer of industrial gelatin and animal gelatin glue in Egypt, delivering high-quality products for industrial applications with advanced production standards.",

  verification: {
    google: "Hq-Y1rlKY0nCMzItjAcJrRvjLZLCXNAJynXYtZjTqB8",
  },

  keywords: [
    "industrial gelatin",
    "technical gelatin",
    "gelatin manufacturer",
    "gelatin supplier",
    "gelatin exporter",
    "animal gelatin glue",
    "hide glue",
    "jelly glue",
    "industrial adhesive",
    "industrial gelatin Egypt",
    "gelatin manufacturer Egypt",
    "animal glue manufacturer",
    "technical gelatin supplier",
    "industrial gelatin exporter",
    "Alostaz"
  ],

  metadataBase: new URL("https://industrialgelatin-alostaz.com/"),

  authors: [{ name: "Alostaz Company" }],

  creator: "Alostaz",

  openGraph: {
    title: "Alostaz | Industrial Gelatin & Animal Glue Manufacturer in Egypt",
    description:
      "Alostaz is an Egyptian manufacturer and exporter of industrial gelatin, hide glue, and animal gelatin glue. Since 1930, we have supplied high-quality gelatin products for diverse industrial applications worldwide.",
    url: "https://industrialgelatin-alostaz.com/",
    siteName: "Alostaz",
    type: "website",
    images: [
    {
      url: "/og-image.webp",
      width: 1200,
      height: 630,
      alt: "Alostaz Industrial Gelatin Manufacturer",
    },
  ],
  },

  alternates: {
    canonical: "https://industrialgelatin-alostaz.com",
  },

  twitter: {
    card: "summary_large_image",
    title: "Alostaz | Industrial Gelatin Manufacturer",
    description: "Industrial gelatin and animal glue production with premium quality standards.",
    images: ["/og-image.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en" dir="ltr">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

