export const watchlistData = [
  {
    symbol: "HDFCBANK",
    bse: true,
    change: -10.45,
    changePct: -1.05,
    ltp: 987.65,
    down: true,
  },
  { symbol: "INFY", change: 138.2, changePct: 9.25, ltp: 1632.0, up: true },
  {
    symbol: "TCS",
    bse: true,
    change: 24.45,
    changePct: 0.81,
    ltp: 3060.0,
    up: true,
  },
  { symbol: "ONGC", change: 1.37, changePct: 0.54, ltp: 255.9, up: true },
  {
    symbol: "HINDUNILVR",
    bse: true,
    change: -2.95,
    changePct: -0.12,
    ltp: 2466.65,
    down: true,
  },
  { symbol: "GOLDBEES", change: 0.03, changePct: 0.03, ltp: 99.71, up: true },
];

export const marketIndices = [
  { name: "NIFTY 50", value: 27360.45, change: 1482.6, changePct: 5.73 },
  { name: "SENSEX", value: 85795.16, change: 1390.7, changePct: 1.65 },
];

export interface Stock {
  symbol: string;
  bse?: boolean;
  change: number;
  changePct: number;
  ltp: number;
  up?: boolean;
  down?: boolean;
}

export interface MarketIndex {
  name: string;
  value: number;
  change: number;
  changePct: number;
}
