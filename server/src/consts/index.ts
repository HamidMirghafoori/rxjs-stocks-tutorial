import { StockDetails, StockFullNameType, StocksType } from '../models';

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
