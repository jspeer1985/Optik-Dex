// 📁 app/docs/page.tsx
"use client";

import Link from "next/link";

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-blue-400 mb-6">📚 Optik Docs</h1>

      <div className="bg-card p-6 rounded-lg shadow-lg max-w-3xl mx-auto space-y-4">
        <p className="text-muted-foreground">
          Welcome to the Optik Coin documentation center. Here you'll find in-depth information about the platform, tokenomics, API usage, and smart contract interactions.
        </p>

        <ul className="list-disc ml-6 text-muted-foreground space-y-2">
          <li>
            <Link href="/whitepaper.pdf" className="text-blue-500 hover:underline" target="_blank">
              📄 Download Whitepaper
            </Link>
          </li>
          <li>
            <a
              href="https://solscan.io/token/J7SCCTVThJ8KyAmFW5pL4GnG6thPK6ooA5ttHzfWCExs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              🔗 View Smart Contract on Solscan
            </a>
          </li>
          <li>
            <Link href="/api-docs" className="text-blue-500 hover:underline">
              🛠️ API Documentation (Coming Soon)
            </Link>
          </li>
        </ul>

        <p className="text-muted-foreground">
          Need help interpreting something? Reach out via the <Link href="/support" className="text-blue-500 hover:underline">support page</Link> or join us on Telegram.
        </p>
      </div>
    </main>
  );
}
