import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockPrices } from '../../consts';
import { StocksType } from '../../models';
import { PageOptionsComponent } from '../page-options/page-options.component';

@Component({
  selector: 'app-stocks-prices',
  standalone: true,
  imports: [CommonModule, PageOptionsComponent],
  templateUrl: './stocks-prices.component.html',
  styleUrl: './stocks-prices.component.css',
})
export class StocksPricesComponent {
  public options: string[] = ['All', 'Map', 'Filter'];
  public stockPrices$: Observable<StocksType[]> = of(mockPrices);

  public action(option: string): void {
    console.log(option);
  }
}
