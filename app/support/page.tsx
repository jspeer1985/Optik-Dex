// 📁 app/support/page.tsx
"use client";

import Link from "next/link";

export default function Support() {
  return (
    <main className="min-h-screen bg-black text-white p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-400 mb-4">📞 Support</h1>
      <p className="text-lg text-gray-300 max-w-2xl text-center mb-6">
        Need help? We’re here for you. Join the community or reach out directly.
      </p>

      <div className="text-center space-y-4">
        <p>
          💬 {" "}
          <a
            href="https://t.me/OptikCoin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Join us on Telegram
          </a>
        </p>

        <p>
          ✉️ Email: {" "}
          <a
            href="mailto:support@optikcoin.ai"
            className="text-blue-500 hover:underline"
          >
            support@optikcoin.ai
          </a>
        </p>

        <p>
          📚 Read the {" "}
          <Link href="/docs" className="text-blue-500 hover:underline">
            Docs
          </Link>
        </p>
      </div>
    </main>
  );
}
