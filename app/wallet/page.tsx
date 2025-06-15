// 📁 app/wallet/page.tsx
"use client";

import dynamic from "next/dynamic";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";

export default function WalletPage() {
  const { publicKey } = useWallet();
  const [solBalance, setSolBalance] = useState<number | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      if (!publicKey) return;
      try {
        const connection = new window.solanaWeb3.Connection("https://api.mainnet-beta.solana.com");
        const balance = await connection.getBalance(publicKey);
        setSolBalance(balance / 1e9);
      } catch (err) {
        console.error("Error fetching balance:", err);
      }
    };
    fetchBalance();
  }, [publicKey]);

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-blue-400 mb-4">💼 Wallet</h1>
      <p className="text-gray-300 mb-6">
        Connect your wallet and view your SOL & OPTIK balance.
      </p>

      <div className="bg-card p-6 rounded-lg shadow-lg">
        <WalletMultiButton className="mb-4" />

        {publicKey ? (
          <div>
            <p className="text-sm text-muted-foreground">
              Address: <span className="break-all">{publicKey.toBase58()}</span>
            </p>
            <p className="mt-2">
              💰 SOL Balance: {solBalance !== null ? `${solBalance.toFixed(4)} SOL` : "Loading..."}
            </p>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">Please connect your wallet to continue.</p>
        )}
      </div>
    </main>
  );
}
