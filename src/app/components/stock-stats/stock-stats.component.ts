import { Component, Input } from '@angular/core';
import { StockStatType } from '../../models';

@Component({
  selector: 'app-stock-stats',
  standalone: true,
  imports: [],
  templateUrl: './stock-stats.component.html',
  styleUrl: './stock-stats.component.css',
})
export class StockStatsComponent {
  @Input() public stockStat: StockStatType = {
    price: 0,
    lastPrice: 0,
    changes: 0,
  };
}
