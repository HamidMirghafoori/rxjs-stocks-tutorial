import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockPrices } from '../../consts';
import { StocksType } from '../../models';

@Component({
  selector: 'app-stocks-prices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stocks-prices.component.html',
  styleUrl: './stocks-prices.component.css',
})
export class StocksPricesComponent {
  public stockPrices$: Observable<StocksType[]> = of(mockPrices);
}
