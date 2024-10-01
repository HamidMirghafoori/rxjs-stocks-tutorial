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
    { caption: 'Beginner', action: () => this.beginner() },
    { caption: 'Intermediate', action: () => this.intermediate() },
    { caption: 'Reference', action: () => this.reference() },
  ];

  constructor(private router: Router) {}

  private home() {
    this.router.navigate(['']);
  }

  private beginner() {
    this.router.navigate(['/beginner']);
  }

  private intermediate() {
    this.router.navigate(['/intermediate']);
  }

  private reference() {
    this.router.navigate(['/reference']);
  }
}
