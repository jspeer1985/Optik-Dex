"use client";
import { useEffect, useState } from "react";

const OPTIK_MINT = process.env.NEXT_PUBLIC_OPTIK_MINT!;
const USDC_MINT = "Es9vMFrzaCERnU3Yxsrq8E2Fh6sXFXtNHkH32DnQbLdA"; // Jupiter's USDC

export default function LivePriceWidget() {
  const [price, setPrice] = useState<number | null>(null);

  useEffect(() => {
    async function fetchPrice() {
      const url = `https://quote-api.jup.ag/v6/quote?inputMint=${OPTIK_MINT}&outputMint=${USDC_MINT}&amount=1000000`; // 1 OPTIK (assuming 6 decimals)
      const res = await fetch(url);
      const data = await res.json();
      const outputAmount = parseFloat(data?.data?.[0]?.outAmount) / 1_000_000;
      setPrice(outputAmount);
    }

    fetchPrice();
    const interval = setInterval(fetchPrice, 15000); // Refresh every 15s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-sm text-white bg-gray-900 px-4 py-2 rounded-md shadow">
      {price ? (
        <span>💱 1 OPTIK = ${price.toFixed(4)} USDC</span>
      ) : (
        <span>Loading price...</span>
      )}
    </div>
  );
}
