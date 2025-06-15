// 📁 app/about/page.tsx
"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-blue-400 mb-4">👁️ About Optik Coin</h1>
      <p className="text-gray-300 mb-6 max-w-3xl">
        Optik Coin is a Solana-powered meme coin built for the future of AI and decentralized finance. We blend lightning-fast transactions with GPT-driven tools for a smarter, scalable, and user-friendly experience.
      </p>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="card">
          <h2 className="card-title">🚀 Our Vision</h2>
          <p className="card-description mt-2">
            To become the most accessible AI-enhanced trading platform in web3 — merging memes, machines, and money.
          </p>
        </div>

        <div className="card">
          <h2 className="card-title">🧠 Powered by GPT</h2>
          <p className="card-description mt-2">
            Our GPT-backed tools provide chart analysis, crypto insights, and automation — all accessible via web and Telegram.
          </p>
        </div>

        <div className="card">
          <h2 className="card-title">📍 Roadmap Highlights</h2>
          <ul className="list-disc ml-5 text-muted-foreground">
            <li>✅ Launch & Liquidity Pool</li>
            <li>🔄 DEX & Token Swaps</li>
            <li>📲 Optik Mobile App (iOS/Android)</li>
            <li>🤖 AI-Powered News Feed & GPT Bot</li>
            <li>🃏 Poker + On-chain Games</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="card-title">📊 Tokenomics</h2>
          <p className="card-description mt-2">
            Total Supply: 1,000,000,000 OPTIK<br />
            LP Allocation: 50%<br />
            Airdrops + Rewards: 20%<br />
            Treasury & Team: 15%<br />
            Marketing & Community: 15%
          </p>
        </div>
      </section>

      <div className="text-center mt-12">
        <Image src="/logo.png" alt="Optik Logo" width={120} height={120} className="mx-auto" />
        <p className="text-muted-foreground mt-2">@OptikCoin — The future is insight.</p>
      </div>
    </main>
  );
}
