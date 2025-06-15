# 🪙 Optik Coin DEX Platform

Welcome to the official **Optik Coin DEX** repository. This decentralized exchange platform fuses AI + crypto by integrating live Solana-based trading tools with GPT-powered news, wallet access, airdrops, and on-chain analytics.

---

## 🚀 Features

* ✅ Real-time OPTIK/USDC price via **Jupiter API**
* ✅ Wallet connection (Solana + MetaMask Ethereum)
* ✅ Live swap interface via Raydium
* ✅ Token dashboard with holders, volume, and liquidity stats
* ✅ GPT assistant for news, analysis, and chat
* ✅ Airdrop claim form with Telegram + email
* ✅ Countdown to launch
* ✅ Responsive UI (mobile + dark mode ready)

---

## 📁 Project Structure

/optik-dex
├── app/                  # Next.js App Router structure
│   ├── page.tsx          # Home page
│   ├── about/page.tsx
│   ├── exchange/page.tsx
│   ├── airdrops/page.tsx
│   ├── wallet/page.tsx
│   ├── dashboard/page.tsx
│   ├── gpt/page.tsx
│   ├── docs/page.tsx
│   ├── support/page.tsx
│   ├── contact/page.tsx
│   ├── faq/page.tsx
│   └── 404.tsx
│
├── components/           # UI components
│   ├── AirdropForm.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Countdown.tsx
│   ├── SocialLinks.tsx
│   ├── WalletConnect.tsx
│   ├── LivePriceWidget.tsx
│   ├── StatsPanel.tsx
│   ├── Chart.tsx
│   └── Favicon.tsx
│
├── public/               # Static assets
│   ├── favicon.ico
│   ├── logo.png
│   └── og-image.png
│
├── styles/               # Tailwind + global styles
│   ├── globals.css
│   └── theme.css         # Color theme and design tokens
│
├── utils/                # Utility helpers
│   └── cn.ts or clsx
│
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── README.md
└── .env.local            # Environment variables
---

## ⚙️ Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Create .env.local
NEXT_PUBLIC_SOLANA_RPC=https://api.mainnet-beta.solana.com
NEXT_PUBLIC_OPTIK_MINT=YourTokenMintAddressHere

# 3. Run dev server
npm run dev
```

> Then visit [http://localhost:3000](http://localhost:3000)

---

## 🌐 Deployment (Vercel)

```bash
vercel
```

---

## 🧠 AI Assistant (OptikGPT)

GPT-based assistant lives at `/gpt`. Future versions will include token-gated access with \$OPTIK.

---

## 💧 Liquidity Strategy

* \$500 bootstrapped (50/50 split: USDC + \$OPTIK)
* Raydium pool via Solana
* Dashboard auto-updates with stats post-launch

---

## 🎨 Theme CSS (`styles/theme.css`)

This file defines custom color tokens:

```css
:root {
  --background: #000000;
  --foreground: #ffffff;
  --primary: #1E90FF;
  --primary-foreground: #ffffff;
  --secondary: #1B2430;
  --secondary-foreground: #ffffff;
  --accent: #C0C0C0;
  --muted: #555555;
  --card: #1B2430;
  --ring: #1E90FF;
  --radius: 0.625rem;
}
```

---

## 📞 Support & Contact

* Telegram: [@OptikCoin](https://t.me/Optik_Coin)
* Twitter: [@OptikCoin](https://twitter.com/OptikCoin)
* Email: [support@optikcoin.ai](mailto:support@optikcoin.ai)

---

> Built by Jay Speer · Powered by Solana · Accelerated by AI
# optik-gpt-dexchange
# Final-Optik-GPT-Exchange
