import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})
export class ToolbarComponent {
  public toolbarButtons = [
    { caption: 'Home', action: () => this.home() },
    { caption: 'Stocks List', action: () => this.stockPrice() },
  ];

  constructor(private router: Router) {}

  private home() {
    this.router.navigate(['']);
  }

  private stockPrice() {
    this.router.navigate(['/stock-prices']);
  }
}
