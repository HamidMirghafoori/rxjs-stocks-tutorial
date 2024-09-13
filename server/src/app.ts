import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import { stocks } from './consts';

const app: Express = express();
const port: number = 3000;

app.use(cors());

app.get('/stocks-price-delayed', (req, res) => {
  setTimeout(() => {
    res.json(stocks);
  }, 3000);
});

app.get('/stocks-price', (req, res) => {
  res.json(stocks);
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
