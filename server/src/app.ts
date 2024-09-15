import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import { stocks } from './consts';
import { getRandomStocks } from './utilities/insex';

const app: Express = express();
const port: number = 3000;

app.use(cors());

app.get('/stocks-price-delayed', (req, res) => {
  setTimeout(() => {
    res.json(stocks);
  }, 3000);
});

app.get('/stocks-price', (req, res) => {
  const randomStocks = getRandomStocks();
  res.json([...stocks, ...randomStocks]);
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
