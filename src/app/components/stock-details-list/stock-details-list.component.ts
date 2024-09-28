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
}
