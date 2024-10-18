import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  concatMap,
  delay,
  distinct,
  interval,
  of,
  take,
  tap,
  toArray,
} from 'rxjs';
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
    this.distinct();
  }

  private distinct() {
    const source1$ = of(1, 2, 3, 3, 2, 4, 5, 1);
    const source2$ = of(
      { id: 1, name: 'A' },
      { id: 2, name: 'B' },
      { id: 1, name: 'A' },
      { id: 4, name: 'A' },
      { id: 3, name: 'C' },
      { id: 1, name: 'D' }
    );
    const source3$ = of(
      1,
      2,
      3,
      1,
      4,
      1,
      5,
      6,
      7,
      1,
      1,
      1,
      1,
      8,
      9,
      1,
      10,
      11,
      1,
      12
    ).pipe(
      concatMap((value) =>
        of(value).pipe(
          tap((value) => console.log('Original value: ', value)),
          delay(200)
        )
      )
    );

    /**
     * 1 - Apply distinct to source1$, and subscribe and log the values
     * 2 - Apply distinct to source2$ with key selector function to filter based on id
     * subscribe and log the values
     * 3 - repeat question 2 just filter by name
     * 4 - Apply distinct to source3$ apply only flush observable
     * flush observable is interval of 1000, log 'Flushed' for each emission and take 6
     * finally you can convert source3$ results to array.
     * Subscribe and log the values.
     * Note how flush resets the unique memory and observable starts to emit new unique values
     */
    source1$.pipe(distinct()).subscribe(console.log);
    console.log('unique by id:');
    source2$
      .pipe(distinct((value) => value.id))
      .subscribe((value) => console.log(JSON.stringify(value)));
    console.log('unique by name:');
    source2$
      .pipe(distinct((value) => value.name))
      .subscribe((value) => console.log(JSON.stringify(value)));
    source3$
      .pipe(
        distinct(
          undefined,
          interval(1000).pipe(
            tap(() => console.log('Flushed!')),
            take(6)
          )
        ),
        toArray()
      )
      .subscribe((value) => console.log(value));
  }
}
