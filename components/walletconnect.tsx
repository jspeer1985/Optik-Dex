// 📁 components/WalletConnect.tsx
"use client";

import { useWallet, WalletMultiButton, WalletDisconnectButton } from "@solana/wallet-adapter-react-ui";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

export default function WalletConnect() {
  const { publicKey } = useWallet();
  const [ethAddress, setEthAddress] = useState<string | null>(null);

  useEffect(() => {
    if ((window as any).ethereum?.isMetaMask) {
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      provider.send("eth_requestAccounts", []).then(() => {
        provider.getSigner().getAddress().then(setEthAddress);
      });
    }
  }, []);

  const connectMetaMask = async () => {
    try {
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      setEthAddress(await signer.getAddress());
    } catch (err) {
      console.error("MetaMask connect error:", err);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <div className="space-y-1">
        <WalletMultiButton className="button" />
        <WalletDisconnectButton className="button" />
        {publicKey && <p className="text-xs text-muted-foreground">Solana: {publicKey.toBase58()}</p>}
      </div>

      <div className="space-y-1">
        {ethAddress ? (
          <p className="text-xs text-muted-foreground">Ethereum: {ethAddress}</p>
        ) : (
          <button class