export const watchlistData = [
  {
    symbol: "HDFCBANK",
    bse: true,
    change: -10.45,
    changePct: -1.05,
    ltp: 987.65,
    down: true,
  },
  { symbol: "INFY", change: -11.5, changePct: -0.77, ltp: 1482.3, down: true },
  {
    symbol: "TCS",
    bse: true,
    change: 22.25,
    changePct: 0.73,
    ltp: 3057.8,
    up: true,
  },
  { symbol: "ONGC", change: 0.84, changePct: 0.33, ltp: 255.37, up: true },
  {
    symbol: "HINDUNILVR",
    bse: true,
    change: -2.95,
    changePct: -0.12,
    ltp: 2466.65,
    down: true,
  },
  { symbol: "GOLDBEES", change: 0.34, changePct: 0.34, ltp: 100.02, up: true },
];

export const marketIndices = [
  { name: "NIFTY 50", value: 25722.1, change: -155.75, changePct: -0.6 },
  { name: "SENSEX", value: 83938.71, change: -465.75, changePct: -0.55 },
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
