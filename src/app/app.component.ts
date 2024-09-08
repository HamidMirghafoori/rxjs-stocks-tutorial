import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StocksPricesComponent } from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StocksPricesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'RxJS-Stocks-Tutorial';
}
