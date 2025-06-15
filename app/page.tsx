// 📁 app/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import Countdown from "@/components/Countdown";
import FeatureList from "@/components/FeatureList";
import EmailForm from "@/components/EmailForm";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 text-center">
      <div className="space-y-4 max-w-3xl mx-auto">
        <Image
          src="/logo.png"
          alt="Optik Coin Logo"
          width={150}
          height={150}
          className="mx-auto"
        />

        <h1 className="text-4xl md:text-5xl font-bold text-blue-400">
          Welcome to the AI-Powered Crypto Revolution
        </h1>

        <p className="text-gray-300 text-lg">
          Optik Coin fuses GPT intelligence with DeFi — fast transactions, live analytics, and powerful tools.
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/exchange">
            <Button>Start Trading</Button>
          </Link>
          <Link href="/airdrops">
            <Button variant="accent">Claim Airdrop</Button>
          </Link>

          
        </div>

        <Countdown />

        <FeatureList />

        <div className="mt-10">
          <EmailForm />
        </div>
      </div>
    </main>
  );
}
