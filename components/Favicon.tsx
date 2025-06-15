// components/Favicon.tsx
import Head from "next/head";

export default function Favicon() {
  return (
    <Head>
      {/* Favicon and App Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />

      {/* Theme Colors */}
      <meta name="theme-color" content="#1E90FF" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#FFFFFF" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1B2430" />

      {/* SEO & Accessibility */}
      <meta name="description" content="Optik Coin - The Future of Decentralized Finance" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />

      {/* Social Media Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@OptikCoin" />
      <meta name="twitter:title" content="Optik Coin" />
      <meta name="twitter:description" content="The Future of Decentralized Finance" />
      <meta name="twitter:image" content="/twitter-image.png" />

      <meta property="og:title" content="Optik Coin" />
      <meta property="og:description" content="The Future of Decentralized Finance" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:url" content="https://optikcoin.com" />
      <meta property="og:site_name" content="Optik Coin" />
    </Head>
  );
}
