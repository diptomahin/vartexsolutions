import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vartexsolutions.com"),
  title: {
    default: "Vartex Solutions | Premium Web, Software & Digital Growth Agency",
    template: "%s | Vartex Solutions",
  },
  description:
    "Vartex Solutions builds high-performance websites, scalable software, WooCommerce stores, MERN and Next.js products, and digital growth systems.",
  keywords: [
    "Vartex Solutions",
    "web development agency",
    "WordPress development",
    "WooCommerce development",
    "Next.js development",
    "MERN stack",
    "custom software development",
    "digital marketing",
    "IT consulting",
  ],
  authors: [{ name: "Vartex Solutions" }],
  creator: "Vartex Solutions",
  publisher: "Vartex Solutions",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vartexsolutions.com",
    siteName: "Vartex Solutions",
    title: "Vartex Solutions | Transforming Ideas Into Powerful Digital Experiences",
    description:
      "Premium technology partner for websites, SaaS, dashboards, eCommerce, custom software, IT consulting, and growth.",
    images: [
      {
        url: "/V-artex-final-logo-removebg-preview.png",
        width: 512,
        height: 512,
        alt: "Vartex Solutions logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vartex Solutions",
    description:
      "High-end digital products, scalable software, WooCommerce, WordPress, and growth systems.",
    images: ["/V-artex-final-logo-removebg-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full scroll-smooth antialiased"
    >
      <body className="min-h-full overflow-x-hidden">{children}</body>
    </html>
  );
}
