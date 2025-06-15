// 📁 app/dashboard/page.tsx
"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/Card";
import LivePriceWidget from "@/components/LivePriceWidget";

<LivePriceWidget />


export default function DashboardPage() {
  const [marketCap, setMarketCap] = useState<number | null>(null);
  const [volume, setVolume] = useState<number | null>(null);
  const [staked, setStaked] = useState<number | null>(null);
  const [apr, setApr] = useState<number | null>(null);

  useEffect(() => {
    // Mock data fetch simulation
    setMarketCap(1200000);
    setVolume(45800);
    setStaked(845000);
    setApr(14.25);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-blue-400 mb-6">📊 Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Market Cap" description="$OPTIK total market value">
          <p className="text-xl font-bold">${marketCap?.toLocaleString() || "..."}</p>
        </Card>

        <Card title="24h Volume" description="Recent transaction activity">
          <p className="text-xl font-bold">${volume?.toLocaleString() || "..."}</p>
        </Card>

        <Card title="Total Staked" description="$OPTIK tokens currently staked">
          <p className="text-xl font-bold">{staked?.toLocaleString() || "..."} OPTIK</p>
        </Card>

        <Card title="Staking APR" description="Current annual reward rate">
          <p className="text-xl font-bold">{apr ? `${apr.toFixed(2)}%` : "..."}</p>
        </Card>
      </div>
    </main>
  );
}
