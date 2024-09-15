export interface StocksType {
  symbol: string;
  price: number;
  lastPrice: number;
  sector: string;
  changes?: boolean | null;
}

export interface StockNameType {
  symbol: string;
  name: string;
}

export interface StockFullNameType {
  [key: string]: string;
}

export interface StockStatType {
  price: number;
  lastPrice: number;
  changes: number;
}

export interface StockDetails {
  marketCap: number; //in billion
  peRatio: number;
  weekHigh52: number;
  weekLow52: number;
  description: string;
}
