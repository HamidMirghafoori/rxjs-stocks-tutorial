import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BehaviorSubject,
  combineLatest,
  concatMap,
  debounceTime,
  delay,
  exhaustMap,
  filter,
  fromEvent,
  interval,
  map,
  merge,
  mergeMap,
  Observable,
  of,
  shareReplay,
  startWith,
  Subject,
  Subscription,
  switchMap,
  tap,
} from 'rxjs';
import { mockStockFullNames } from '../../consts';
import {
  StockDetailsFlatten,
  StockFullDetail,
  StockNameType,
  StockRealtimeType,
  StockStatType,
  StocksType,
} from '../../models';
import { DataService } from '../../services';
import { ChartComponent } from '../chart/chart.component';
import { PageOptionsComponent } from '../page-options/page-options.component';
import { RealtimePriceComponent } from '../realtime-price/realtime-price.component';
import { StockDetailsListComponent } from '../stock-details-list/stock-details-list.component';
import { StockDetailsComponent } from '../stock-details/stock-details.component';
import { StockNameComponent } from '../stock-name/stock-name.component';
import { StockStatsComponent } from '../stock-stats/stock-stats.component';
import { StockTop10Component } from '../stock-top10/stock-top10.component';

@Component({
  selector: 'app-stocks-prices',
  standalone: true,
  imports: [
    CommonModule,
    ChartComponent,
    FormsModule,
    PageOptionsComponent,
    StockNameComponent,
    StockStatsComponent,
    StockDetailsComponent,
    StockTop10Component,
    RealtimePriceComponent,
    StockDetailsListComponent,
  ],
  templateUrl: './stocks-prices.component.html',
  styleUrl: './stocks-prices.component.css',
})
export class StocksPricesComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('refreshButton') refreshButton!: ElementRef<HTMLButtonElement>;

  public options: string[] = [
    'All',
    'Map',
    'BehaviorSubject',
    'switchMap',
    'combineLatest',
    'concat/concatMap',
    'tap/filter',
    'fromEvent',
    'debounceTime',
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
  public stockDetails$!: Observable<StockDetailsFlatten[]>;
  private subscription1: Subscription = new Subscription();
  private subscription2: Subscription = new Subscription();
  public stockPricesMapped$!: Observable<StocksType[]>;
  private fetchData$ = new BehaviorSubject<void>(undefined);
  public minRange: number = 0;
  public maxRange: number = 600;
  public currentRange$ = new BehaviorSubject<number | null>(this.maxRange);
  public allSectors$!: Observable<string[]>;
  private selectedSector$ = new BehaviorSubject<string>('');
  private clickedStock$ = new BehaviorSubject<StocksType | null>(null);
  public selectedSymbol$ = new BehaviorSubject<string>('');
  public userRefresh$!: Observable<Event>;
  public systemRefresh$: Observable<number> = interval(8000);
  private refreshTriggered$!: Observable<number | Event>;
  public newStockPrice$!: Observable<number>;
  private searchDetail$ = new BehaviorSubject<string>('');
  public filteredStockDetails$: Observable<StockDetailsFlatten[]> = of([]);

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

  public selectedFilteredStock$: Observable<StocksType | null> =
    this.clickedStock$.pipe(
      switchMap((stock) =>
        this.selectedSector$.pipe(
          filter((selectedSector) => selectedSector === stock?.sector),
          map(() => stock), // we need to return stock observable, otherwise selectedSector will be returned
          startWith(null) // to clear slickedStock if filter fails and it previously had a value
        )
      )
    );

  constructor(
    private cdr: ChangeDetectorRef,
    private dataService: DataService
  ) {}

  private findMin(stocks: StocksType[]): number {
    return Math.floor(Math.min(...stocks.map((stock) => stock.price)));
  }

  private findMax(stocks: StocksType[]): number {
    return Math.ceil(Math.max(...stocks.map((stock) => stock.price)));
  }

  public ngOnInit(): void {
    this.filteredStockDetails$ = this.searchDetail$.pipe(
      debounceTime(500),
      switchMap((searchInput) => 
        this.dataService.getStockDetails().pipe(
          map((stockDetails) => 
            Object.entries(stockDetails).map(([symbol, details]) => ({
              symbol,
              ...details,
            }))
          ),
          map((stockDetails) =>
            stockDetails.filter(
              (stock) =>
                searchInput === '' ||
                stock.description.toLowerCase().includes(searchInput.toLowerCase())
            )
          )
        )
      )
    );
    // this solution will not call api in every change in search input comparing to above
    // this.stockDetails$ = this.dataService.getStockDetails().pipe(
    //   map((stockDetails) =>
    //     Object.entries(stockDetails).map(([symbol, details]) => ({
    //       symbol,
    //       ...details,
    //     }))
    //   )
    // );

    // this.filteredStockDetails$ = combineLatest([
    //   this.stockDetails$,
    //   this.searchDetail$,
    // ]).pipe(
    //   map(([stockDetails, searchInput]) =>
    //     stockDetails.filter(
    //       (stock) =>
    //         searchInput === '' ||
    //         stock.description.toLowerCase().includes(searchInput.toLowerCase())
    //     )
    //   )
    // );

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
      this.currentRange$,
    ]).pipe(
      mergeMap(([part1, part2, currentRange]) =>
        of({ combinedStocks: [...part1.slice(0, -2), ...part2], currentRange })
      ),
      tap(({ combinedStocks }) => {
        this.minRange = this.findMin(combinedStocks);
        this.maxRange = this.findMax(combinedStocks);
      }),
      map(({ combinedStocks, currentRange }) =>
        combinedStocks.filter((stock) =>
          currentRange ? stock.price < currentRange : true
        )
      )
    );

    this.allSectors$ = this.allStocks$.pipe(
      map((stocks) => [...new Set(stocks.map((stock) => stock.sector))])
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

  public onSearchDetailChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    this.searchDetail$.next(value);
  }

  public onSectorChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const sector = inputElement.value;
    this.selectedSector$.next(sector);
  }

  public onRangeChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const newRange = Number(inputElement.value);
    this.currentRange$.next(newRange);
  }

  public ngAfterViewInit(): void {
    this.selectedOption$.next('All');
    this.cdr.detectChanges();

    // we needed to have our logic here because refresh button is not rendered to be selected
    this.selectedSymbol$.subscribe((symbol) => {
      if (symbol !== '') {
        this.userRefresh$ = fromEvent(
          this.refreshButton.nativeElement,
          'click'
        );
        this.refreshTriggered$ = merge(this.userRefresh$, this.systemRefresh$);
        this.newStockPrice$ = this.refreshTriggered$.pipe(
          // we can use mergeMap and switchMap to see the differences
          exhaustMap(() =>
            this.dataService.getRealtimePrice(this.selectedSymbol$.value, true)
          )
        );
      }
    });
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

  public onFilteredStockClick = (stock: StocksType) => {
    this.clickedStock$.next(stock);
  };

  public onStockClicked(stock: StocksType): void {
    this.selectedStock$.next(stock);
  }

  public onUserRefresh = (stock: StocksType): void => {
    this.selectedSymbol$.next(stock.symbol);
  };

  public onRealStockClicked = (stock: StocksType): void => {
    const realPrice$ = this.dataService.getRealtimePrice(stock.symbol, true);
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
