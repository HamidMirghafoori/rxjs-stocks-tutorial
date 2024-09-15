export interface StocksType {
  symbol: string;
  price: number;
  lastPrice: number;
  sector: string;
  changes?: boolean | null;
}
