import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { StocksType } from '../../models';

@Component({
  selector: 'app-stock-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-info.component.html',
  styleUrl: './stock-info.component.css',
})
export class StockInfoComponent {
  @Input() public stock$!: Observable<StocksType>;
  @Input() public label: string = 'Suggested Stocks';
}
