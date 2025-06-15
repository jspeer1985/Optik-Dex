// 📁 app/airdrops/page.tsx
"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";

export default function AirdropsPage() {
  const { publicKey } = useWallet();
  const [eligible, setEligible] = useState(false);
  const [claimed, setClaimed] = useState(false);

  useEffect(() => {
    // Simulate eligibility check
    if (publicKey) {
      setEligible(true); // TODO: Replace with real logic
    }
  }, [publicKey]);

  const handleClaim = () => {
    // Simulate claim
    if (eligible) setClaimed(true);
  };

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-blue-400 mb-6">🎁 Claim Your OPTIK Airdrop</h1>
      <p className="text-gray-300 mb-4">Check your eligibility and claim bonus tokens if qualified.</p>

      {publicKey ? (
        <div className="bg-card p-6 rounded-lg shadow-lg">
          <p className="mb-4 text-muted-foreground">
            Wallet: <span className="break-all">{publicKey.toBase58()}</span>
          </p>

          {claimed ? (
            <p className="text-green-400 font-semibold">✅ Airdrop successfully claimed!</p>
          ) : eligible ? (
            <Button onClick={handleClaim}>Claim Airdrop</Button>
          ) : (
            <p className="text-red-500">❌ Not eligible for current airdrop.</p>
          )}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">Please connect your wallet to check eligibility.</p>
      )}
    </main>
  );
}
