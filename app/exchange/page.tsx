// 📁 app/exchange/page.tsx
"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/Button";
import LivePriceWidget from "@/components/LivePriceWidget";

<LivePriceWidget />


const JupiterSwap = dynamic(() => import("@/components/JupiterSwap"), { ssr: false });

export default function ExchangePage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-blue-400 mb-4">🔄 Optik Exchange</h1>
      <p className="text-gray-300 mb-6">
        Swap OPTIK ↔ USDC instantly using our Jupiter-powered interface.
      </p>

      <div className="bg-card text-card-foreground rounded-lg shadow-lg p-6 mb-8">
        <JupiterSwap />
      </div>

      <div className="bg-popover text-popover-foreground rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-2">📊 Liquidity Tools</h2>
        <p className="text-sm text-muted-foreground mb-4">
          View, add, or remove liquidity from the OPTIK/USDC pool on Raydium.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild>
            <a
              href="https://raydium.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Add Liquidity
            </a>
          </Button>

          <Button variant="muted" asChild>
            <a
              href="https://raydium.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Remove Liquidity
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
