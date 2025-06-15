// 📁 components/Footer.tsx
"use client";

import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 border-t border-gray-800 mt-12">
      <div className="container text-center">
        <div className="mb-4">
          <SocialLinks />
        </div>
        <div className="text-sm text-muted-foreground space-x-4">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/support" className="hover:underline">
            Support
          </Link>
          <Link href="/faq" className="hover:underline">
            FAQ
          </Link>
          <Link href="/docs" className="hover:underline">
            Docs
          </Link>
          <span className="block mt-2">© {new Date().getFullYear()} Optik Coin. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
