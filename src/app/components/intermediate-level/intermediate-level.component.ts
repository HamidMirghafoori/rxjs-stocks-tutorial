import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { min, of } from 'rxjs';
import { LogService } from '../../services';
import { TerminalComponent } from '../terminal/terminal.component';

@Component({
  selector: 'app-intermediate-level',
  standalone: true,
  imports: [FormsModule, TerminalComponent],
  templateUrl: './intermediate-level.component.html',
  styleUrl: './intermediate-level.component.css',
})
export class IntermediateLevelComponent implements OnInit {
  public constructor(private log: LogService) {}

  public ngOnInit(): void {
    this.log.clearLogs();
    this.min();
  }

  private min() {
    const ranks$ = of(5, 3, 9, 7);
    const ages$ = of({ age: 25 }, { age: 30 }, { age: 28 });
    /**
     * 1 - Apply min on ranks$, subscribe and log the result
     * 2 - Apply min on ages$ and provide comparer function to compare based on age key
     *    subscribe and log the result
     */
    ranks$.pipe(min()).subscribe((value) => console.log(value));

    ages$
      .pipe(min((a, b) => a.age - b.age))
      .subscribe((value) => console.log(JSON.stringify(value)));
  }
}
