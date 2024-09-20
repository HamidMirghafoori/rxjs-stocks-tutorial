import { stocksPart2 } from '../consts';
import { StocksType } from '../models';

export const getRandomStocks = (): StocksType[] => {
  const shuffled = [...stocksPart2].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 2);
};

export const randomGain = (price: number): number => {
  const gain = 1 + (0.5 - Math.random()) / 10;
  return price * gain;
};
