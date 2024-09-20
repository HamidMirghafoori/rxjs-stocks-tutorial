import {
  HistoricalPriceType,
  StockDetails,
  StockFullNameType,
  StockPrice,
  StocksType,
} from '../models';

// Mock data for stock prices
export const stocks: StocksType[] = [
  { symbol: 'AAPL', price: 150.25, lastPrice: 148.2, sector: 'Technology' },
  { symbol: 'GOOGL', price: 2800.1, lastPrice: 1810.35, sector: 'Technology' },
  { symbol: 'MSFT', price: 305, lastPrice: 303.2, sector: 'Technology' },
  {
    symbol: 'AMZN',
    price: 3400.5,
    lastPrice: 3600.7,
    sector: 'Consumer Discretionary',
  },
  {
    symbol: 'TSLA',
    price: 720.1,
    lastPrice: 700.5,
    sector: 'Consumer Discretionary',
  },
  { symbol: 'FB', price: 370.2, lastPrice: 370.2, sector: 'Technology' },
  {
    symbol: 'NFLX',
    price: 580.75,
    lastPrice: 590.4,
    sector: 'Communication Services',
  },
  { symbol: 'NVDA', price: 220.1, lastPrice: 218.4, sector: 'Technology' },
  {
    symbol: 'BABA',
    price: 180.4,
    lastPrice: 175.2,
    sector: 'Consumer Discretionary',
  },
  { symbol: 'INTC', price: 55.3, lastPrice: 54.7, sector: 'Technology' },
  { symbol: 'AMD', price: 105.1, lastPrice: 102.4, sector: 'Technology' },
  { symbol: 'IBM', price: 142, lastPrice: 143.2, sector: 'Technology' },
  { symbol: 'ORCL', price: 88.7, lastPrice: 88.7, sector: 'Technology' },
  { symbol: 'CSCO', price: 56.5, lastPrice: 57.8, sector: 'Technology' },
  { symbol: 'ADBE', price: 660.2, lastPrice: 645.7, sector: 'Technology' },
  { symbol: 'UBER', price: 48.3, lastPrice: 50.4, sector: 'Technology' },
  { symbol: 'LYFT', price: 58.9, lastPrice: 60.1, sector: 'Technology' },
  { symbol: 'SQ', price: 240.1, lastPrice: 245.8, sector: 'Technology' },
  { symbol: 'PYPL', price: 270.3, lastPrice: 275.9, sector: 'Technology' },
  {
    symbol: 'TWTR',
    price: 72.5,
    lastPrice: 70.8,
    sector: 'Communication Services',
  },
  {
    symbol: 'SNAP',
    price: 75.2,
    lastPrice: 73.6,
    sector: 'Communication Services',
  },
  {
    symbol: 'SPOT',
    price: 220.9,
    lastPrice: 215.2,
    sector: 'Communication Services',
  },
  { symbol: 'SHOP', price: 1450.4, lastPrice: 1420.6, sector: 'Technology' },
  { symbol: 'ZM', price: 360.1, lastPrice: 350.3, sector: 'Technology' },
  { symbol: 'CRM', price: 250.9, lastPrice: 248.5, sector: 'Technology' },
  {
    symbol: 'PINS',
    price: 65.4,
    lastPrice: 65.4,
    sector: 'Communication Services',
  },
  { symbol: 'DOCU', price: 290.8, lastPrice: 290.8, sector: 'Technology' },
  {
    symbol: 'T',
    price: 29.5,
    lastPrice: 29.2,
    sector: 'Communication Services',
  },
  {
    symbol: 'DIS',
    price: 180.4,
    lastPrice: 175.7,
    sector: 'Communication Services',
  },
  { symbol: 'WMT', price: 142.2, lastPrice: 145.3, sector: 'Consumer Staples' },
];

export const stocksPart2: StocksType[] = [
  { symbol: 'PEP', price: 155.4, lastPrice: 153.2, sector: 'Consumer Staples' },
  { symbol: 'KO', price: 58.3, lastPrice: 57.9, sector: 'Consumer Staples' },
  {
    symbol: 'MCD',
    price: 230.5,
    lastPrice: 232.7,
    sector: 'Consumer Discretionary',
  },
  { symbol: 'PG', price: 140.2, lastPrice: 138.8, sector: 'Consumer Staples' },
  {
    symbol: 'TGT',
    price: 245.1,
    lastPrice: 242.5,
    sector: 'Consumer Discretionary',
  },
  {
    symbol: 'HD',
    price: 325.7,
    lastPrice: 321.9,
    sector: 'Consumer Discretionary',
  },
  {
    symbol: 'COST',
    price: 465.4,
    lastPrice: 460.8,
    sector: 'Consumer Staples',
  },
  {
    symbol: 'NKE',
    price: 145.6,
    lastPrice: 143.5,
    sector: 'Consumer Discretionary',
  },
  { symbol: 'V', price: 230.9, lastPrice: 225.3, sector: 'Financials' },
  { symbol: 'MA', price: 360.4, lastPrice: 350.7, sector: 'Financials' },
  { symbol: 'XOM', price: 55.1, lastPrice: 54.3, sector: 'Energy' },
  { symbol: 'CVX', price: 105.8, lastPrice: 103.4, sector: 'Energy' },
  { symbol: 'JPM', price: 160.7, lastPrice: 158.9, sector: 'Financials' },
  { symbol: 'BAC', price: 41.5, lastPrice: 40.9, sector: 'Financials' },
  { symbol: 'GS', price: 380.3, lastPrice: 375.1, sector: 'Financials' },
  { symbol: 'C', price: 70.2, lastPrice: 68.7, sector: 'Financials' },
  { symbol: 'WFC', price: 47.6, lastPrice: 46.9, sector: 'Financials' },
  { symbol: 'BA', price: 230.4, lastPrice: 225.2, sector: 'Industrials' },
  { symbol: 'CAT', price: 205.9, lastPrice: 202.1, sector: 'Industrials' },
  { symbol: 'MMM', price: 175.8, lastPrice: 174.2, sector: 'Industrials' },
];

export const stockDetails: { [symbol: string]: StockDetails } = {
  AAPL: {
    marketCap: 2500,
    peRatio: 28.7,
    weekHigh52: 179.61,
    weekLow52: 124.17,
    description:
      'Apple Inc. designs, manufactures, and markets consumer electronics, software, and services.',
  },
  GOOGL: {
    marketCap: 1700,
    peRatio: 24.2,
    weekHigh52: 2934.13,
    weekLow52: 1280.0,
    description:
      'Alphabet Inc. is the parent company of Google and several other businesses, focusing on technology and innovation.',
  },
  MSFT: {
    marketCap: 2300,
    peRatio: 34.5,
    weekHigh52: 366.78,
    weekLow52: 246.65,
    description:
      'Microsoft Corporation develops, licenses, and supports a wide range of software products and services.',
  },
  AMZN: {
    marketCap: 1500,
    peRatio: 56.8,
    weekHigh52: 3795.43,
    weekLow52: 2500.0,
    description:
      'Amazon.com, Inc. is an e-commerce and cloud computing company that offers online retail, digital streaming, and AI services.',
  },
  TSLA: {
    marketCap: 780,
    peRatio: 75.4,
    weekHigh52: 1243.49,
    weekLow52: 600.0,
    description:
      'Tesla, Inc. designs, manufactures, and sells electric vehicles and energy storage products.',
  },
  FB: {
    marketCap: 850,
    peRatio: 22.3,
    weekHigh52: 382.18,
    weekLow52: 272.2,
    description:
      'Meta Platforms, Inc. operates as a social media conglomerate, owning platforms like Facebook, Instagram, and WhatsApp.',
  },
  NFLX: {
    marketCap: 220,
    peRatio: 29.4,
    weekHigh52: 700.99,
    weekLow52: 300.0,
    description:
      'Netflix, Inc. provides streaming media and video-on-demand online and is a prominent player in content creation.',
  },
  NVDA: {
    marketCap: 950,
    peRatio: 39.8,
    weekHigh52: 314.81,
    weekLow52: 108.14,
    description:
      'NVIDIA Corporation designs graphics processing units (GPUs) for gaming, AI, and professional visualization.',
  },
  BABA: {
    marketCap: 440,
    peRatio: 22.1,
    weekHigh52: 236.0,
    weekLow52: 58.0,
    description:
      'Alibaba Group is a leading global e-commerce company and a provider of cloud computing and digital entertainment services.',
  },
  INTC: {
    marketCap: 200,
    peRatio: 15.8,
    weekHigh52: 65.35,
    weekLow52: 34.21,
    description:
      'Intel Corporation designs and manufactures semiconductor products and is a leader in the computing and data storage industries.',
  },
  AMD: {
    marketCap: 150,
    peRatio: 38.5,
    weekHigh52: 130.4,
    weekLow52: 54.57,
    description:
      'Advanced Micro Devices, Inc. develops computer processors and related technologies for business and consumer markets.',
  },
  IBM: {
    marketCap: 120,
    peRatio: 20.3,
    weekHigh52: 153.21,
    weekLow52: 115.2,
    description:
      'IBM provides hardware, software, and consulting services for enterprise information technology solutions.',
  },
  ORCL: {
    marketCap: 320,
    peRatio: 24.7,
    weekHigh52: 130.4,
    weekLow52: 80.0,
    description:
      'Oracle Corporation offers cloud-based solutions, database management systems, and enterprise software.',
  },
  CSCO: {
    marketCap: 250,
    peRatio: 18.2,
    weekHigh52: 65.26,
    weekLow52: 40.0,
    description:
      'Cisco Systems, Inc. designs, manufactures, and sells networking hardware, telecommunications equipment, and other high-technology products.',
  },
  ADBE: {
    marketCap: 280,
    peRatio: 38.7,
    weekHigh52: 674.02,
    weekLow52: 412.0,
    description:
      'Adobe Inc. provides software for creative professionals, including Photoshop, Illustrator, and Acrobat.',
  },
  UBER: {
    marketCap: 85,
    peRatio: 0,
    weekHigh52: 64.05,
    weekLow52: 22.0,
    description:
      'Uber Technologies, Inc. operates a ridesharing platform and provides delivery services through Uber Eats.',
  },
  LYFT: {
    marketCap: 20,
    peRatio: 0,
    weekHigh52: 78.29,
    weekLow52: 14.56,
    description:
      'Lyft, Inc. offers a ridesharing platform and is known for its innovative approach to urban transportation.',
  },
  SQ: {
    marketCap: 100,
    peRatio: 45.6,
    weekHigh52: 295.85,
    weekLow52: 120.0,
    description:
      'Block, Inc. (formerly Square, Inc.) provides financial services and mobile payment solutions.',
  },
  PYPL: {
    marketCap: 250,
    peRatio: 23.5,
    weekHigh52: 296.7,
    weekLow52: 160.0,
    description:
      'PayPal Holdings, Inc. operates a digital payments platform and offers various online payment solutions.',
  },
  TWTR: {
    marketCap: 30,
    peRatio: 0,
    weekHigh52: 85.0,
    weekLow52: 32.0,
    description:
      'Twitter, Inc. operates a global social media platform known for its real-time updates and public conversation.',
  },
  SNAP: {
    marketCap: 40,
    peRatio: 0,
    weekHigh52: 83.34,
    weekLow52: 9.36,
    description:
      'Snap Inc. operates Snapchat, a multimedia messaging app, and develops augmented reality technologies.',
  },
  SPOT: {
    marketCap: 55,
    peRatio: 0,
    weekHigh52: 320.0,
    weekLow52: 150.0,
    description:
      'Spotify Technology S.A. provides a digital music streaming service and is a leader in the music streaming industry.',
  },
  SHOP: {
    marketCap: 200,
    peRatio: 62.4,
    weekHigh52: 2075.0,
    weekLow52: 600.0,
    description:
      'Shopify Inc. offers a platform for online stores and retail point-of-sale systems.',
  },
  ZM: {
    marketCap: 100,
    peRatio: 51.6,
    weekHigh52: 599.0,
    weekLow52: 270.0,
    description:
      'Zoom Video Communications, Inc. provides a video-first communications platform, including video conferencing and webinars.',
  },
  CRM: {
    marketCap: 240,
    peRatio: 45.7,
    weekHigh52: 311.75,
    weekLow52: 300.66,
    description: '',
  },
  PINS: {
    marketCap: 10.5,
    peRatio: 25.1,
    weekHigh52: 70.3,
    weekLow52: 50.1,
    description:
      'Pinterest, Inc. operates a visual discovery engine for finding ideas like recipes, home and style inspiration, and more.',
  },
  DOCU: {
    marketCap: 50.2,
    peRatio: 120.5,
    weekHigh52: 320.0,
    weekLow52: 250.0,
    description:
      'DocuSign, Inc. provides electronic agreement solutions, helping organizations automate and streamline their document signing processes.',
  },
  DIS: {
    marketCap: 350.7,
    peRatio: 33.5,
    weekHigh52: 190.0,
    weekLow52: 160.0,
    description:
      'The Walt Disney Company operates as an entertainment company worldwide, including theme parks, movies, and media networks.',
  },
  WMT: {
    marketCap: 390.8,
    peRatio: 24.6,
    weekHigh52: 150.0,
    weekLow52: 130.0,
    description:
      'Walmart Inc. operates retail stores and e-commerce businesses, providing a wide range of products from groceries to electronics.',
  },
  PEP: {
    marketCap: 250.1,
    peRatio: 28.3,
    weekHigh52: 160.0,
    weekLow52: 140.0,
    description:
      'PepsiCo, Inc. is a global food and beverage leader, known for its popular brands like Pepsi, Mountain Dew, and Frito-Lay snacks.',
  },
  KO: {
    marketCap: 235.7,
    peRatio: 22.8,
    weekHigh52: 60.0,
    weekLow52: 50.0,
    description:
      'The Coca-Cola Company is a multinational beverage corporation, producing a wide range of soft drinks and beverages.',
  },
  MCD: {
    marketCap: 200.4,
    peRatio: 30.2,
    weekHigh52: 240.0,
    weekLow52: 210.0,
    description:
      "McDonald's Corporation operates a global chain of fast-food restaurants, serving burgers, fries, and beverages.",
  },
  PG: {
    marketCap: 340,
    peRatio: 23.5,
    weekHigh52: 150.0,
    weekLow52: 130.0,
    description:
      'Procter & Gamble Co. provides a range of consumer goods, including health, hygiene, and home products.',
  },
  TGT: {
    marketCap: 130,
    peRatio: 22.0,
    weekHigh52: 250.0,
    weekLow52: 220.0,
    description:
      'Target Corporation operates a chain of retail stores, offering a wide range of products from groceries to home goods.',
  },
  HD: {
    marketCap: 330,
    peRatio: 27.0,
    weekHigh52: 340.0,
    weekLow52: 300.0,
    description:
      'The Home Depot, Inc. is a home improvement retailer, providing tools, building materials, and home improvement products.',
  },
  COST: {
    marketCap: 225.6,
    peRatio: 35.0,
    weekHigh52: 480.0,
    weekLow52: 430.0,
    description:
      'Costco Wholesale Corporation operates a chain of membership-based warehouse clubs, offering a wide range of goods at discounted prices.',
  },
  NKE: {
    marketCap: 200,
    peRatio: 30.5,
    weekHigh52: 155.0,
    weekLow52: 130.0,
    description:
      'Nike, Inc. designs, develops, and markets footwear, apparel, and equipment for sports and fitness activities.',
  },
  V: {
    marketCap: 490,
    peRatio: 34.2,
    weekHigh52: 240.0,
    weekLow52: 200.0,
    description:
      'Visa Inc. operates a global payments technology company, facilitating electronic payments between consumers, merchants, and financial institutions.',
  },
  MA: {
    marketCap: 375,
    peRatio: 32.8,
    weekHigh52: 370.0,
    weekLow52: 340.0,
    description:
      'Mastercard Incorporated provides financial services through its payment solutions and technologies for consumers, businesses, and governments.',
  },
  XOM: {
    marketCap: 410.2,
    peRatio: 18.6,
    weekHigh52: 60.0,
    weekLow52: 50.0,
    description:
      'Exxon Mobil Corporation is an oil and gas multinational, engaged in the exploration, production, and distribution of petroleum products.',
  },
  CVX: {
    marketCap: 275.8,
    peRatio: 20.5,
    weekHigh52: 110.0,
    weekLow52: 95.0,
    description:
      'Chevron Corporation is an integrated energy company involved in all aspects of the oil, natural gas, and geothermal energy industries.',
  },
  JPM: {
    marketCap: 425,
    peRatio: 10.7,
    weekHigh52: 165.0,
    weekLow52: 145.0,
    description:
      'JPMorgan Chase & Co. is a global financial services firm offering investment banking, financial services, and asset management.',
  },
  BAC: {
    marketCap: 190,
    peRatio: 11.8,
    weekHigh52: 45.0,
    weekLow52: 35.0,
    description:
      'Bank of America Corporation provides a range of banking and financial services, including loans, deposits, and investment management.',
  },
  GS: {
    marketCap: 135,
    peRatio: 12.4,
    weekHigh52: 390.0,
    weekLow52: 360.0,
    description:
      'Goldman Sachs Group, Inc. is an investment bank and financial services company providing investment management, securities, and financial advisory services.',
  },
  C: {
    marketCap: 140,
    peRatio: 9.7,
    weekHigh52: 75.0,
    weekLow52: 65.0,
    description:
      'Citigroup Inc. offers a wide range of financial services, including banking, investment, and wealth management services.',
  },
  WFC: {
    marketCap: 180,
    peRatio: 12.6,
    weekHigh52: 50.0,
    weekLow52: 45.0,
    description:
      'Wells Fargo & Company provides banking, investment, and mortgage products and services to individuals, businesses, and institutions.',
  },
  BA: {
    marketCap: 250,
    peRatio: 20.0,
    weekHigh52: 240.0,
    weekLow52: 210.0,
    description:
      'Boeing Company designs, manufactures, and sells airplanes, rotorcraft, and satellites to commercial and government customers.',
  },
  CAT: {
    marketCap: 190,
    peRatio: 15.2,
    weekHigh52: 215.0,
    weekLow52: 185.0,
    description:
      'Caterpillar Inc. manufactures construction and mining equipment, diesel and natural gas engines, and industrial gas turbines.',
  },
  MMM: {
    marketCap: 130,
    peRatio: 16.0,
    weekHigh52: 180.0,
    weekLow52: 160.0,
    description:
      '3M Company operates in various sectors, including consumer goods, healthcare, and industrial products, known for its innovation and technology.',
  },
  T: {
    marketCap: 207,
    peRatio: 6.9,
    weekHigh52: 33.9,
    weekLow52: 26.4,
    description:
      'AT&T Inc. is a diversified, global leader in telecommunications, media, and technology. The company provides mobile and broadband services, as well as entertainment through WarnerMedia assets like HBO and Warner Bros.',
  },
};

export const stocksFullName: StockFullNameType = {
  AAPL: 'Apple Inc.',
  GOOGL: 'Alphabet Inc.',
  MSFT: 'Microsoft Corporation',
  AMZN: 'Amazon.com, Inc.',
  TSLA: 'Tesla, Inc.',
  FB: 'Meta Platforms, Inc.',
  NFLX: 'Netflix, Inc.',
  NVDA: 'NVIDIA Corporation',
  BABA: 'Alibaba Group Holding Limited',
  INTC: 'Intel Corporation',
  AMD: 'Advanced Micro Devices, Inc.',
  IBM: 'International Business Machines Corporation',
  ORCL: 'Oracle Corporation',
  CSCO: 'Cisco Systems, Inc.',
  ADBE: 'Adobe Inc.',
  UBER: 'Uber Technologies, Inc.',
  LYFT: 'Lyft, Inc.',
  SQ: 'Block, Inc.',
  PYPL: 'PayPal Holdings, Inc.',
  TWTR: 'Twitter, Inc.',
  SNAP: 'Snap Inc.',
  SPOT: 'Spotify Technology S.A.',
  SHOP: 'Shopify Inc.',
  ZM: 'Zoom Video Communications, Inc.',
  CRM: 'Salesforce, Inc.',
  PINS: 'Pinterest, Inc.',
  DOCU: 'DocuSign, Inc.',
  DIS: 'The Walt Disney Company',
  WMT: 'Walmart Inc.',
  PEP: 'PepsiCo, Inc.',
  KO: 'Coca-Cola Company',
  MCD: "McDonald's Corporation",
  PG: 'Procter & Gamble Co.',
  TGT: 'Target Corporation',
  HD: 'The Home Depot, Inc.',
  COST: 'Costco Wholesale Corporation',
  NKE: 'Nike, Inc.',
  V: 'Visa Inc.',
  MA: 'Mastercard Inc.',
  XOM: 'Exxon Mobil Corporation',
  CVX: 'Chevron Corporation',
  JPM: 'JPMorgan Chase & Co.',
  BAC: 'Bank of America Corporation',
  GS: 'The Goldman Sachs Group, Inc.',
  C: 'Citigroup Inc.',
  WFC: 'Wells Fargo & Company',
  BA: 'The Boeing Company',
  CAT: 'Caterpillar Inc.',
  MMM: '3M Company',
  T: 'AT&T Inc.',
};

export const stockSymbols: string[] = [
  'AAPL',
  'GOOGL',
  'MSFT',
  'AMZN',
  'TSLA',
  'FB',
  'NFLX',
  'NVDA',
  'BABA',
  'INTC',
  'AMD',
  'IBM',
  'ORCL',
  'CSCO',
  'ADBE',
  'UBER',
  'LYFT',
  'SQ',
  'PYPL',
  'TWTR',
  'SNAP',
  'SPOT',
  'SHOP',
  'ZM',
  'CRM',
  'PINS',
  'DOCU',
  'DIS',
  'WMT',
  'PEP',
  'KO',
  'MCD',
  'PG',
  'TGT',
  'HD',
  'COST',
  'NKE',
  'V',
  'MA',
  'XOM',
  'CVX',
  'JPM',
  'BAC',
  'GS',
  'C',
  'WFC',
  'BA',
  'CAT',
  'MMM',
  'T',
];

export const historicalPrices: HistoricalPriceType = {
  AAPL: [
    150.25, 151.25, 152.25, 153.25, 154.25, 155.25, 156.25, 157.25, 158.25,
    159.25,
  ],
  GOOGL: [
    2800.1, 2820.1, 2840.1, 2860.1, 2880.1, 2900.1, 2920.1, 2940.1, 2960.1,
    2980.1,
  ],
  MSFT: [305, 308, 311, 314, 317, 320, 323, 326, 329, 332],
  AMZN: [
    3400.5, 3380.5, 3360.5, 3340.5, 3320.5, 3300.5, 3280.5, 3260.5, 3240.5,
    3220.5,
  ],
  TSLA: [720.1, 725.1, 730.1, 735.1, 740.1, 745.1, 750.1, 755.1, 760.1, 765.1],
  FB: [370.2, 370.2, 370.2, 370.2, 370.2, 370.2, 370.2, 370.2, 370.2, 370.2],
  NFLX: [
    580.75, 577.75, 574.75, 571.75, 568.75, 565.75, 562.75, 559.75, 556.75,
    553.75,
  ],
  NVDA: [220.1, 222.1, 224.1, 226.1, 228.1, 230.1, 232.1, 234.1, 236.1, 238.1],
  BABA: [180.4, 178.4, 176.4, 174.4, 172.4, 170.4, 168.4, 166.4, 164.4, 162.4],
  INTC: [55.3, 56.3, 57.3, 58.3, 59.3, 60.3, 61.3, 62.3, 63.3, 64.3],
  AMD: [105.1, 107.1, 109.1, 111.1, 113.1, 115.1, 117.1, 119.1, 121.1, 123.1],
  IBM: [142, 140, 138, 136, 134, 132, 130, 128, 126, 124],
  ORCL: [88.7, 89.7, 90.7, 91.7, 92.7, 93.7, 94.7, 95.7, 96.7, 97.7],
  CSCO: [56.5, 55.5, 54.5, 53.5, 52.5, 51.5, 50.5, 49.5, 48.5, 47.5],
  ADBE: [660.2, 662.2, 664.2, 666.2, 668.2, 670.2, 672.2, 674.2, 676.2, 678.2],
  UBER: [48.3, 49.3, 50.3, 51.3, 52.3, 53.3, 54.3, 55.3, 56.3, 57.3],
  LYFT: [58.9, 59.9, 60.9, 61.9, 62.9, 63.9, 64.9, 65.9, 66.9, 67.9],
  SQ: [240.1, 238.1, 236.1, 234.1, 232.1, 230.1, 228.1, 226.1, 224.1, 222.1],
  PYPL: [270.3, 268.3, 266.3, 264.3, 262.3, 260.3, 258.3, 256.3, 254.3, 252.3],
  TWTR: [72.5, 71.5, 70.5, 69.5, 68.5, 67.5, 66.5, 65.5, 64.5, 63.5],
  SNAP: [75.2, 76.2, 77.2, 78.2, 79.2, 80.2, 81.2, 82.2, 83.2, 84.2],
  SPOT: [220.9, 219.9, 218.9, 217.9, 216.9, 215.9, 214.9, 213.9, 212.9, 211.9],
  SHOP: [
    1450.4, 1440.4, 1430.4, 1420.4, 1410.4, 1400.4, 1390.4, 1380.4, 1370.4,
    1360.4,
  ],
  ZM: [360.1, 358.1, 356.1, 354.1, 352.1, 350.1, 348.1, 346.1, 344.1, 342.1],
  CRM: [250.9, 252.9, 254.9, 256.9, 258.9, 260.9, 262.9, 264.9, 266.9, 268.9],
  PINS: [65.4, 66.4, 67.4, 68.4, 69.4, 70.4, 71.4, 72.4, 73.4, 74.4],
  DOCU: [290.8, 292.8, 294.8, 296.8, 298.8, 300.8, 302.8, 304.8, 306.8, 308.8],
  T: [29.5, 29.7, 29.9, 30.1, 30.3, 30.5, 30.7, 30.9, 31.1, 31.3],
  DIS: [180.4, 179.4, 178.4, 177.4, 176.4, 175.4, 174.4, 173.4, 172.4, 171.4],
  WMT: [142.2, 144.2, 146.2, 148.2, 150.2, 152.2, 154.2, 156.2, 158.2, 160.2],
  PEP: [155.4, 156.4, 157.4, 158.4, 159.4, 160.4, 161.4, 162.4, 163.4, 164.4],
  KO: [58.3, 59.3, 60.3, 61.3, 62.3, 63.3, 64.3, 65.3, 66.3, 67.3],
  MCD: [230.5, 229.5, 228.5, 227.5, 226.5, 225.5, 224.5, 223.5, 222.5, 221.5],
  PG: [140.2, 141.2, 142.2, 143.2, 144.2, 145.2, 146.2, 147.2, 148.2, 149.2],
  TGT: [245.1, 247.1, 249.1, 251.1, 253.1, 255.1, 257.1, 259.1, 261.1, 263.1],
  HD: [325.7, 327.7, 329.7, 331.7, 333.7, 335.7, 337.7, 339.7, 341.7, 343.7],
  COST: [465.4, 464.4, 463.4, 462.4, 461.4, 460.4, 459.4, 458.4, 457.4, 456.4],
  NKE: [145.6, 146.6, 147.6, 148.6, 149.6, 150.6, 151.6, 152.6, 153.6, 154.6],
  V: [230.9, 231.9, 232.9, 233.9, 234.9, 235.9, 236.9, 237.9, 238.9, 239.9],
  MA: [360.4, 362.4, 364.4, 366.4, 368.4, 370.4, 372.4, 374.4, 376.4, 378.4],
  XOM: [55.1, 55.6, 56.1, 56.6, 57.1, 57.6, 58.1, 58.6, 59.1, 59.6],
  CVX: [105.8, 106.8, 107.8, 108.8, 109.8, 110.8, 111.8, 112.8, 113.8, 114.8],
  JPM: [160.7, 162.7, 164.7, 166.7, 168.7, 170.7, 172.7, 174.7, 176.7, 178.7],
  BAC: [41.5, 42.5, 43.5, 44.5, 45.5, 46.5, 47.5, 48.5, 49.5, 50.5],
  GS: [380.3, 382.3, 384.3, 386.3, 388.3, 390.3, 392.3, 394.3, 396.3, 398.3],
  C: [70.2, 71.2, 72.2, 73.2, 74.2, 75.2, 76.2, 77.2, 78.2, 79.2],
  WFC: [47.6, 48.1, 48.6, 49.1, 49.6, 50.1, 50.6, 51.1, 51.6, 52.1],
  BA: [230.4, 231.4, 232.4, 233.4, 234.4, 235.4, 236.4, 237.4, 238.4, 239.4],
  CAT: [205.9, 207.9, 209.9, 211.9, 213.9, 215.9, 217.9, 219.9, 221.9, 223.9],
  MMM: [175.8, 176.8, 177.8, 178.8, 179.8, 180.8, 181.8, 182.8, 183.8, 184.8],
};

export const allPrices: StockPrice = {
  AAPL: 150.25,
  GOOGL: 2800.1,
  MSFT: 305,
  AMZN: 3400.5,
  TSLA: 720.1,
  FB: 370.2,
  NFLX: 580.75,
  NVDA: 220.1,
  BABA: 180.4,
  INTC: 55.3,
  AMD: 105.1,
  IBM: 142,
  ORCL: 88.7,
  CSCO: 56.5,
  ADBE: 660.2,
  UBER: 48.3,
  LYFT: 58.9,
  SQ: 240.1,
  PYPL: 270.3,
  TWTR: 72.5,
  SNAP: 75.2,
  SPOT: 220.9,
  SHOP: 1450.4,
  ZM: 360.1,
  CRM: 250.9,
  PINS: 65.4,
  DOCU: 290.8,
  T: 29.5,
  DIS: 180.4,
  WMT: 142.2,
  PEP: 155.4,
  KO: 58.3,
  MCD: 230.5,
  PG: 140.2,
  TGT: 245.1,
  HD: 325.7,
  COST: 465.4,
  NKE: 145.6,
  V: 230.9,
  MA: 360.4,
  XOM: 55.1,
  CVX: 105.8,
  JPM: 160.7,
  BAC: 41.5,
  GS: 380.3,
  C: 70.2,
  WFC: 47.6,
  BA: 230.4,
  CAT: 205.9,
  MMM: 175.8,
};
