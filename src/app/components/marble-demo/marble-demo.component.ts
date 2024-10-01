import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { concatMap, delay, Observable, of, range } from 'rxjs';

@Component({
  selector: 'app-marble-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marble-demo.component.html',
  styleUrl: './marble-demo.component.css',
})
export class MarbleDemoComponent implements OnInit {
  @Input() public command: string = '';
  @Input() public speed: number = 500;
  @Input() public number$: Observable<number> = range(5);

  public source1: boolean[] = new Array(10).fill(false);
  public complete: boolean = false;
  public circleColors: string[] = Array.from({ length: 10 }, (_, i) => i).map(
    (num) => 'circle' + num
  );
  public ngOnInit(): void {
    this.runNumbers();
  }

  public runNumbers() {
    if (!this.number$) {
      return;
    }
    
    this.source1 = new Array(10).fill(false);
    this.complete = false;

    this.number$
      .pipe(concatMap((number) => of(number).pipe(delay(this.speed))))
      .subscribe({
        next: (data) => (this.source1[data] = true),
        complete: () => {
          this.complete = true;
        },
      });
  }
}
