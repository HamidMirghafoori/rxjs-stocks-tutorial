import { Component, Input } from '@angular/core';
import { StockNameType } from '../../models';

@Component({
  selector: 'app-stock-name',
  standalone: true,
  imports: [],
  templateUrl: './stock-name.component.html',
  styleUrl: './stock-name.component.css'
})
export class StockNameComponent {
@Input() public stockName: StockNameType = {symbol: '', name: ''};
}
