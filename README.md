# 💹 Zerodha Kite Clone — Post Login Dashboard (Next.js + Tailwind + Shadcn UI)

A **modern Zerodha Kite post-login dashboard clone** built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Shadcn/UI**.  
This project replicates the **look and layout** of the original Zerodha Kite after login — including the watchlist, market summary, portfolio overview, holdings, orders, and funds pages — all using **dummy data**.

> ⚠️ **Disclaimer:** This project is built purely for **learning and UI/UX demonstration** purposes. It is **not affiliated** with or endorsed by Zerodha. No real trading or APIs are used.

---

## 🚀 Features

- 🧭 **Next.js App Router** project structure  
- 🎨 **Shadcn/UI + Tailwind CSS** components  
- 📊 **Dummy market data** (NIFTY, SENSEX, holdings, etc.)  
- 📱 **Fully responsive layout** (sidebar + navbar + dashboard)  
- 🧩 Modular & reusable components  
- 💾 Organized folder structure for scalability  
- 💡 Optional server actions support (if needed later)

---

## 🗂 Folder Structure

zerodha-kite-clone/
├─ app/
│ ├─ layout.tsx # Root layout (Navbar + Sidebar)
│ ├─ page.tsx # Default dashboard route
│ ├─ dashboard/
│ │ └─ page.tsx # Dashboard page
│ ├─ orders/
│ │ └─ page.tsx # Orders page
│ ├─ holdings/
│ │ └─ page.tsx # Holdings page
│ ├─ positions/
│ │ └─ page.tsx # Positions page
│ ├─ bids/
│ │ └─ page.tsx # Bids page
│ ├─ funds/
│ │ └─ page.tsx # Funds page
│ └─ globals.css # Tailwind base styles
│
├─ components/
│ ├─ ui/ # Shadcn components (auto-generated)
│ ├─ Navbar.tsx # Top navigation bar
│ ├─ Sidebar.tsx # Left watchlist sidebar
│ ├─ WatchlistCard.tsx # Individual stock row
│ ├─ MarketSummary.tsx # NIFTY/SENSEX section
│ ├─ EquityCard.tsx # Equity block (margin etc.)
│ ├─ CommodityCard.tsx # Commodity block
│ ├─ EmptyState.tsx # "No holdings" message
│ ├─ PortfolioChart.tsx # Placeholder chart (optional)
│ └─ Footer.tsx # (optional) bottom footer
│
├─ data/
│ ├─ watchlist.ts # Dummy stock data (symbols, prices)
│ ├─ holdings.ts # Dummy holdings data
│ └─ summary.ts # Dummy market summary
│
├─ lib/
│ └─ utils.ts # Helper functions (formatters etc.)
│
├─ public/
│ └─ icons/, logo.svg # App logos or placeholders
│
├─ components.json # Shadcn config
├─ tailwind.config.js
├─ tsconfig.json
├─ package.json
└─ README.md



---

## 🧱 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Framework** | [Next.js 14 (App Router)](https://nextjs.org/) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **UI Components** | [Shadcn/UI](https://ui.shadcn.com) |
| **Icons** | Lucide React |
| **Charts | Recharts or Chart.js |
| **Package Manager** | npm / yarn / pnpm |

---

## ⚙️ Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/<your-username>/zerodha-kite-clone.git
cd zerodha-kite-clone
2️⃣ Install dependencies
npm install
# or
yarn install
3️⃣ Run the development server
npm run dev
# or
yarn dev
