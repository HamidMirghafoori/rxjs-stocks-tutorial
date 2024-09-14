import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval, map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css',
})
export class ClockComponent implements OnInit{
  public clock$: Observable<string> = interval(1000).pipe(
    startWith(0),
    map(() => {
      return new Date().toLocaleString().substring(12, 20);
    })
  );

  public ngOnInit(): void {
    this.clock$.subscribe();
  }
}
