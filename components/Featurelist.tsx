"use client";

import { useState, useEffect } from "react";

const features = [
  "Real-time OPTIK/USDC pricing via Jupiter",
  "Wallet connection (Solana & Ethereum)",
  "Raydium-powered swap interface",
  "Token dashboard with live metrics",
  "AI-powered GPT assistant (OptikGPT)",
  "Telegram + email airdrop claim",
  "Fully responsive dark mode UI",
  "Countdown to launch with token lock info",
];

export default function FeatureList() {
  const [visibleFeatures, setVisibleFeatures] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < features.length) {
        setVisibleFeatures((prev) => [...prev, features[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="my-8 px-4">
      <h2 className="text-2xl font-bold text-white mb-4">🚀 Platform Features</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white text-sm">
        {visibleFeatures.map((feature, idx) => (
          <li
            key={idx}
            className="transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-blue-400"
          >
            ✅ {feature}
          </li>
        ))}
      </ul>
    </section>
  );
}
