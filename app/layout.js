import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Header from "../components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0d9488",
};

export const metadata = {
  title: {
    default: "Australia PR Points Calculator (2026) | Check SkillSelect Eligibility",
    template: "%s",
  },
  description:
    "Calculate your Australia PR points for Subclasses 189, 190, and 491 with our accurate 2026 points calculator. Instant score breakdown based on official Home Affairs criteria.",
  metadataBase: new URL("https://ausprcalculator.com"),
  alternates: {
    canonical: "https://ausprcalculator.com",
  },
  openGraph: {
    title: "Australia PR Points Calculator (2026) | Check SkillSelect Eligibility",
    description:
      "Calculate your Australia PR points for Subclasses 189, 190, and 491 with our accurate 2026 points calculator. Instant score breakdown based on official Home Affairs criteria.",
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
    title: "Australia PR Points Calculator (2026) | Check SkillSelect Eligibility",
    description:
      "Calculate your Australia PR points for Subclasses 189, 190, and 491 with our accurate 2026 points calculator. Instant score breakdown based on official Home Affairs criteria.",
    images: [
      "https://d1yr7ysliv0ys4.cloudfront.net/site-content/aus_pr_calculator.webp",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-150">
        <Header />
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J8KM2W8J36"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-J8KM2W8J36');
          `}
        </Script>
      </body>
    </html>
  );
}
