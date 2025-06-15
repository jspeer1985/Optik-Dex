// 📁 app/gpt/page.tsx
"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import LivePriceWidget from "@/components/LivePriceWidget";

<LivePriceWidget />

export default function OptikGPT() {
  const { publicKey } = useWallet();

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-center text-blue-500 mb-6">🤖 Optik GPT Assistant</h1>

      {publicKey ? (
        <>
          <p className="text-sm text-muted-foreground mb-4 text-center">
            Connected as: {publicKey.toBase58()}
          </p>
          <iframe>
            src="https://chat.optikcoin.ai"
            className="w-full h-[600px] rounded-lg border border-gray-800"
            sandbox="allow-scripts allow-same-origin allow-popups"
            title="Optik GPT"
            allow="clipboard-write"
          />
        </>
      ) : (
        <p className="text-center text-muted-foreground">
          Please connect your Solana wallet to access Optik GPT.
        </p>
      )}
    </main>
  );
}
