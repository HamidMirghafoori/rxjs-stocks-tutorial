import { stocksPart2 } from '../consts';
import { StocksType } from '../models';

export const getRandomStocks = (): StocksType[] => {
  const shuffled = stocksPart2.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 2);
};
