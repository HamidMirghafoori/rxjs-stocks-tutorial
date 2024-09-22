import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  concatMap,
  delay,
  map,
  mergeMap,
  Observable,
  of,
  shareReplay,
  Subject,
  Subscription,
  switchMap,
} from 'rxjs';
import { mockStockFullNames } from '../../consts';
import {
  StockFullDetail,
  StockNameType,
  StockRealtimeType,
  StockStatType,
  StocksType,
} from '../../models';
import { DataService } from '../../services';
import { PageOptionsComponent } from '../page-options/page-options.component';
import { RealtimePriceComponent } from '../realtime-price/realtime-price.component';
import { StockDetailsComponent } from '../stock-details/stock-details.component';
import { StockNameComponent } from '../stock-name/stock-name.component';
import { StockStatsComponent } from '../stock-stats/stock-stats.component';
import { StockTop10Component } from '../stock-top10/stock-top10.component';

@Component({
  selector: 'app-stocks-prices',
  standalone: true,
  imports: [
    CommonModule,
    PageOptionsComponent,
    StockNameComponent,
    StockStatsComponent,
    StockDetailsComponent,
    StockTop10Component,
    RealtimePriceComponent,
  ],
  templateUrl: './stocks-prices.component.html',
  styleUrl: './stocks-prices.component.css',
})
export class StocksPricesComponent implements OnInit, OnDestroy, AfterViewInit {
  public options: string[] = [
    'All',
    'Map',
    'BehaviorSubject',
    'switchMap',
    'combineLatest',
    'concat/concatMap'
  ];
  public filters: string[] = ['All', 'Positive', 'Negative', 'Flat'];
  public stockPrices$: Observable<StocksType[]> = new Observable<
    StocksType[]
  >();
  public stockPricesPart2$: Observable<StocksType[]> = new Observable<
    StocksType[]
  >();
  public allStocks$: Observable<StocksType[]> = new Observable<StocksType[]>();
  public stockName: StockNameType = { name: '', symbol: '' };
  public stockStat: StockStatType = { price: 0, lastPrice: 0, changes: 0 };
  public stockRealtime$: BehaviorSubject<StockRealtimeType> =
    new BehaviorSubject<StockRealtimeType>({
      price: 0,
      market: '',
      symbol: '',
    });
  private selectedStock$: Subject<StocksType> = new Subject<StocksType>();
  public selectedOption$: Subject<string> = new Subject();
  public selectedFilter$: BehaviorSubject<string> = new BehaviorSubject('All');
  public top10Stocks$: BehaviorSubject<StockFullDetail[]> = new BehaviorSubject(
    [] as StockFullDetail[]
  );
  private subscription1: Subscription = new Subscription();
  private subscription2: Subscription = new Subscription();
  public stockPricesMapped$!: Observable<StocksType[]>;
  private fetchData$ = new BehaviorSubject<void>(undefined);

  public filteredStocks$: Observable<StocksType[]> = this.selectedFilter$.pipe(
    switchMap((filter) => {
      switch (filter) {
        case 'Positive':
          return this.stockPricesMapped$.pipe(
            map((stocks) =>
              stocks.filter((stock) => stock.price - stock.lastPrice > 0)
            )
          );
        case 'Negative':
          return this.stockPricesMapped$.pipe(
            map((stocks) =>
              stocks.filter((stock) => stock.price - stock.lastPrice < 0)
            )
          );
        case 'Flat':
          return this.stockPricesMapped$.pipe(
            map((stocks) =>
              stocks.filter((stock) => stock.price - stock.lastPrice === 0)
            )
          );
        default:
          return this.stockPricesMapped$;
      }
    })
  );

  constructor(
    private cdr: ChangeDetectorRef,
    private dataService: DataService
  ) {}

  public ngOnInit(): void {
    this.stockPrices$ = this.fetchData$.pipe(
      switchMap(() => this.dataService.getStocksList()),
      shareReplay()
    );

    this.stockPricesPart2$ = this.fetchData$.pipe(
      switchMap(() => this.dataService.getStocksListPart2()),
      shareReplay()
    );
    this.allStocks$ = combineLatest([
      this.stockPrices$,
      this.stockPricesPart2$,
    ]).pipe(
      mergeMap(([part1, part2]) => of([...part1.slice(0, -2), ...part2]))
    );

    this.stockPricesMapped$ = this.stockPrices$.pipe(
      map((stocks: StocksType[]) =>
        stocks.map((stock) => ({
          ...stock,
          changes:
            stock.price > stock.lastPrice
              ? true
              : stock.price < stock.lastPrice
              ? false
              : null, // null for no change
        }))
      )
    );
    this.findTop10();
    this.filteredStocks$.subscribe();
    this.subscription1 = this.selectedStock$.subscribe((stock) => {
      this.stockName = {
        symbol: stock.symbol,
        name: mockStockFullNames[stock.symbol],
      } as StockNameType;
    });
    this.subscription2 = this.selectedStock$.subscribe((stock) => {
      this.stockStat = {
        price: stock.price,
        lastPrice: stock.lastPrice,
        changes: Math.round((stock.price - stock.lastPrice) * 100) / 100,
      } as StockStatType;
    });
  }

  public ngAfterViewInit(): void {
    this.selectedOption$.next('All');
    this.cdr.detectChanges();
  }

  public ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }

  public onOptionClick = (option: string): void => {
    if (option === 'All') {
      this.fetchData$.next();
    }
    this.selectedOption$.next(option);
  };

  public onFilterClick = (filter: string): void => {
    this.selectedFilter$.next(filter);
  };

  public onStockClicked(stock: StocksType): void {
    this.selectedStock$.next(stock);
  }

  public onRealStockClicked = (stock: StocksType): void => {
    const realPrice$ = this.dataService.getRealtimePrice(stock.symbol);
    of('Nasdaq', 'NYSE', 'LSE') // instead of having hardcoded values we can have them as markets$ here
      .pipe(
        concatMap((market) => {
          return (
            market === 'Nasdaq' ? realPrice$ : realPrice$.pipe(delay(2000))
          ).pipe(map((price) => ({ price, market })));
        })
      )
      .subscribe(({ price, market }) => {
        this.stockRealtime$.next({
          price,
          market,
          symbol: stock.symbol,
        });
      });
  };

  private findTop10() {
    this.dataService.getStockDetailInformation().subscribe((data) => {
      this.top10Stocks$.next(
        data.sort((a, b) => b.peRatio - a.peRatio).slice(0, 10)
      );
    });
  }
}
