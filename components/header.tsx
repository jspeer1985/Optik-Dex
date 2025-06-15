"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-black border-b border-gray-800 text-white py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Optik Coin" width={36} height={36} />
          <span className="text-xl font-bold text-blue-400">Optik Coin</span>
        </Link>

        <nav className="hidden md:flex space-x-6 text-sm">
          <Link href="/about" className="hover:text-blue-400">About</Link>
          <Link href="/exchange" className="hover:text-blue-400">Exchange</Link>
          <Link href="/airdrops" className="hover:text-blue-400">Airdrops</Link>
          <Link href="/wallet" className="hover:text-blue-400">Wallet</Link>
          <Link href="/dashboard" className="hover:text-blue-400">Dashboard</Link>
          <Link href="/docs" className="hover:text-blue-400">Docs</Link>
          <Link href="/support" className="hover:text-blue-400">Support</Link>
        </nav>
      </div>
    </header>
  );
}
