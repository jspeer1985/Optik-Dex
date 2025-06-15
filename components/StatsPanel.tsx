// 📁 components/StatsPanel.tsx
"use client";

import { useEffect, useState } from "react";

export default function StatsPanel() {
  const [holders, setHolders] = useState<number | null>(null);
  const [marketCap, setMarketCap] = useState<number | null>(null);
  const [volume, setVolume] = useState<number | null>(null);

  useEffect(() => {
    // Simulated API fetch for demo purposes
    const fetchStats = async () => {
      try {
        // Replace with real endpoints or on-chain queries
        const data = await fetch("/api/stats.json").then(res => res.json());
        setHolders(data.holders);
        setMarketCap(data.marketCap);
        setVolume(data.volume);
      } catch (err) {
        console.error("Failed to fetch stats:", err);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mt-8">
      <div className="card">
        <p className="text-muted-foreground text-sm">Holders</p>
        <p className="text-2xl font-bold">{holders ?? "-"}</p>
      </div>
      <div className="card">
        <p className="text-muted-foreground text-sm">Market Cap</p>
        <p className="text-2xl font-bold">{marketCap ? `$${marketCap.toLocaleString()}` : "-"}</p>
      </div>
      <div className="card">
        <p className="text-muted-foreground text-sm">24h Volume</p>
        <p className="text-2xl font-bold">{volume ? `$${volume.toLocaleString()}` : "-"}</p>
      </div>
    </div>
  );
}
