import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { StockRealtimeType } from '../../models';

@Component({
  selector: 'app-realtime-price',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './realtime-price.component.html',
  styleUrl: './realtime-price.component.css'
})
export class RealtimePriceComponent {
  @Input() public stockRealtime$: Observable<StockRealtimeType> = new Observable<StockRealtimeType>();
}
