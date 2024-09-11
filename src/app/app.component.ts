import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StocksPricesComponent } from './components';
import { HeaderComponent } from './components/header/header.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    StocksPricesComponent,
    HeaderComponent,
    ToolbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'RxJS-Stocks-Tutorial';
}
