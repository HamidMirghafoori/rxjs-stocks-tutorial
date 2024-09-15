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
