import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { StockDetailsFlatten } from '../../models';

@Component({
  selector: 'app-stock-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-details.component.html',
  styleUrl: './stock-details.component.css',
})
export class StockDetailsComponent {
  @Input() public stockDetails$!: Observable<StockDetailsFlatten[]>;
}
