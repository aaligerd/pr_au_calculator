import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Australia PR Points Calculator | Skilled Migration Estimator",
  description: "Calculate your points for Australia Subclass 189, 190, and 491 visas instantly. Updated with official Department of Home Affairs criteria.",
  metadataBase: new URL("https://ausprcalculator.com"),
  alternates: {
    canonical: "https://ausprcalculator.com",
  },
  openGraph: {
    title: "Australia PR Points Calculator",
    description: "Calculate your skilled migration points for Subclass 189, 190 & 491 visas instantly.",
    url: "https://ausprcalculator.com",
    siteName: "Australia PR Points Calculator",
    images: [
      {
        url: "https://d1yr7ysliv0ys4.cloudfront.net/site-content/aus_pr_calculator.webp",
        width: 1200,
        height: 630,
        alt: "Australia PR Points Calculator - ausprcalculator.com",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Australia PR Points Calculator",
    description: "Calculate your skilled migration points for Subclass 189, 190 & 491 visas instantly.",
    images: ["https://d1yr7ysliv0ys4.cloudfront.net/site-content/aus_pr_calculator.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-J8KM2W8J36"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-J8KM2W8J36');
        `}
      </Script>
    </html>
  );
}
