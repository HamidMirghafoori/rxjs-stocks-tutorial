export interface StocksType {
  symbol: string;
  price: number;
  lastPrice: number;
  changes?: boolean | null;
}
