import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import {
  allPrices,
  historicalPrices,
  stockDetails,
  stocks,
  stocksFullName,
  stocksPart2,
  stockSymbols,
} from './consts';
import {
  priceRealtime,
  priceRealtimeWithDelay,
  root,
  stockDetailsBySymbols,
  stockDetailsUrl,
  stockHistoric,
  stockHistoricBySymbols,
  stockNameBySymbols,
  stocksDelayed,
  stocksPrice,
  stocksPricePart2,
  symbols
} from './routes';
import { getRandomStocks, randomGain } from './utilities';

const app: Express = express();
const port: number = 3000;

app.use(cors());
app.use(express.json());

app.get(stocksDelayed, (req, res) => {
  setTimeout(() => {
    res.json(stocks);
  }, 3000);
});

app.get(stocksPricePart2, (req, res) => {
  res.json(stocksPart2);
});

app.get(stocksPrice, (req, res) => {
  const randomStocks = getRandomStocks();
  res.json([...stocks, ...randomStocks]);
});

app.get(symbols, (req, res) => {
  res.json(stockSymbols);
});

app.get(priceRealtime, (req, res) => {
  const symbol = req.params.symbol.toUpperCase();
  const price = allPrices[symbol];
  res.json(Math.round(randomGain(price) * 100) / 100);
});

app.get(priceRealtimeWithDelay, (req, res) => {
  const symbol = req.params.symbol.toUpperCase();
  const price = allPrices[symbol];
  setTimeout(() => {
    res.json(Math.round(randomGain(price) * 100) / 100);
  }, 2000);
});

app.get(stockDetailsUrl, (req, res) => {
    res.json(stockDetails);
});

app.get(stockDetailsBySymbols, (req, res) => {
  const symbol = req.params.symbol.toUpperCase();
  const stock = stockDetails?.[symbol];

  if (stock) {
    res.json(stock);
  } else {
    res.status(404).json({ error: 'Stock not found' });
  }
});

app.get(stockHistoricBySymbols, (req, res) => {
  const symbol = req.params.symbol.toUpperCase();

  if (symbol) {
    res.json(historicalPrices[symbol]);
  } else {
    res.status(404).json({ error: 'Symbol not found' });
  }
});

app.get(stockNameBySymbols, (req, res) => {
  const symbol = req.params.symbol.toUpperCase();

  if (symbol) {
    res.json(stocksFullName[symbol]);
  } else {
    res.status(404).json({ error: 'Symbol not found' });
  }
});

app.get(stockHistoric, (req, res) => {
  res.json(historicalPrices);
});

app.get(root, (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
