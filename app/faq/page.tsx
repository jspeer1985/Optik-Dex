// 📁 app/faq/page.tsx
"use client";

import Link from "next/link";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-blue-400 mb-6">❓ Frequently Asked Questions</h1>

      <div className="bg-card p-6 rounded-lg shadow-lg max-w-3xl mx-auto space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-white">What is Optik Coin?</h2>
          <p className="text-muted-foreground mt-1">
            Optik Coin ($OPTIK) is a Solana-based meme token that integrates AI technology to offer tools like GPT chat, analytics, and decentralized finance features.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">How do I buy OPTIK?</h2>
          <p className="text-muted-foreground mt-1">
            You can buy OPTIK through our <Link href="/exchange" className="text-blue-500 hover:underline">Exchange page</Link> using USDC via the Raydium and Jupiter aggregator integration.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">Where can I view the smart contract?</h2>
          <p className="text-muted-foreground mt-1">
            The OPTIK smart contract is publicly verifiable on Solscan:
            <a
              href="https://solscan.io/token/J7SCCTVThJ8KyAmFW5pL4GnG6thPK6ooA5ttHzfWCExs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Solscan Token Page
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">How do I claim an airdrop?</h2>
          <p className="text-muted-foreground mt-1">
            Airdrops can be claimed on the <Link href="/airdrops" className="text-blue-500 hover:underline">Airdrops page</Link> after wallet verification.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">How can I contact support?</h2>
          <p className="text-muted-foreground mt-1">
            You can reach us via email at <a href="mailto:support@optikcoin.ai" className="text-blue-500 hover:underline">support@optikcoin.ai</a> or visit the <Link href="/support" className="text-blue-500 hover:underline">Support page</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}
