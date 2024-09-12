import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subject, Subscription } from 'rxjs';
import { mockPrices, mockStockFullNames } from '../../consts';
import { StockNameType, StockStatType, StocksType } from '../../models';
import { PageOptionsComponent } from '../page-options/page-options.component';
import { StockNameComponent } from '../stock-name/stock-name.component';
import { StockStatsComponent } from '../stock-stats/stock-stats.component';

@Component({
  selector: 'app-stocks-prices',
  standalone: true,
  imports: [
    CommonModule,
    PageOptionsComponent,
    StockNameComponent,
    StockStatsComponent,
  ],
  templateUrl: './stocks-prices.component.html',
  styleUrl: './stocks-prices.component.css',
})
export class StocksPricesComponent implements OnInit, OnDestroy {
  public options: string[] = ['All', 'Map', 'Filter'];
  public stockPrices$: Observable<StocksType[]> = of(mockPrices);
  public stockName: StockNameType = { name: '', symbol: '' };
  public stockStat: StockStatType = { price: 0, lastPrice: 0, changes: 0 };
  private selectedStock$: Subject<StocksType> = new Subject<StocksType>();
  private subscription1: Subscription = new Subscription();
  private subscription2: Subscription = new Subscription();

  public ngOnInit(): void {
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

  public ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }

  public action(option: string): void {
    console.log(option);
  }

  public onStockClicked(stock: StocksType): void {
    this.selectedStock$.next(stock);
  }
}
