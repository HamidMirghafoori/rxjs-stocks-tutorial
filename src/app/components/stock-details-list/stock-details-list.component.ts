import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StockDetailsFlatten } from '../../models';

@Component({
  selector: 'app-stock-details-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-details-list.component.html',
  styleUrl: './stock-details-list.component.css',
})
export class StockDetailsListComponent {
  @Input() public stockDetails$: Observable<StockDetailsFlatten[]> = of([]);

  // public stockDetails = [
  //   {
  //     symbol: 'AAPL',
  //     marketCap: 2500,
  //     peRatio: 28.7,
  //     weekHigh52: 179.61,
  //     weekLow52: 124.17,
  //     description:
  //       'Apple Inc. designs, manufactures, and markets consumer electronics, software, and services.',
  //   },
  //   {
  //     symbol: 'GOOGL',
  //     marketCap: 1700,
  //     peRatio: 24.2,
  //     weekHigh52: 2934.13,
  //     weekLow52: 1280.0,
  //     description:
  //       'Alphabet Inc. is the parent company of Google and several other businesses, focusing on technology and innovation.',
  //   },
  //   {
  //     symbol: 'MSFT',
  //     marketCap: 2300,
  //     peRatio: 34.5,
  //     weekHigh52: 366.78,
  //     weekLow52: 246.65,
  //     description:
  //       'Microsoft Corporation develops, licenses, and supports a wide range of software products and services.',
  //   },
  // ];
}
