import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StockFullDetail } from '../../models';

@Component({
  selector: 'app-stock-top10',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-top10.component.html',
  styleUrl: './stock-top10.component.css'
})
export class StockTop10Component {
@Input() public top10Stocks$: BehaviorSubject<StockFullDetail[]> = new BehaviorSubject(
  [] as StockFullDetail[]
)
}
