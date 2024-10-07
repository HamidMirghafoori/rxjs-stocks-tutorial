import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { combineLatest, delay, finalize, interval, map, take } from 'rxjs';
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
    this.combineLatest();
  }

  public combineLatest() {
    /**
     * define 4 observables as following:
     * source$1, interval of 100, take 20 and finalize with log that it has completed
     * source$2, interval of 500 with first delay of 1000, take 3 and finalize with log that it has completed
     * source$3, interval of 400, take 10 and finalize with log that it has completed
     * source$4, same as source$2 but it checks the values if value===2 then throws an error
     * then subscribe to all of them separately and log the value but comment them out.
     * use combineLatest to combine first 3 sources and subscribe to it with full signature 
     *   and proper message for each callback
     * Note how the values are emitted from combineLatest()
     */
     const source1$ = interval(100).pipe(
      take(20),
      finalize(() => console.log('source1$ has completed!'))
    );
    const source2$ = interval(500).pipe(
      delay(1000),
      take(3),
      finalize(() => console.log('source2$ has completed!'))
    );
    const source3$ = interval(400).pipe(
      take(10),
      finalize(() => console.log('source3$ has completed!'))
    );

    const source4$ = interval(500).pipe(
      delay(1000),
      map((value) => {
        if (value === 2) throw new Error('Error in observable 4!');
        return value;
      }),
      take(3),
      finalize(() => console.log('source4$ has completed!'))
    );

    // source1$.subscribe((val) => console.log('1-> ', val));
    // source2$.subscribe((val) => console.log('2-> ', val));
    // source3$.subscribe((val) => console.log('3-> ', val));
    // source4$.subscribe((val) => console.log('4-> ', val));

    combineLatest([source1$, source2$, source3$, source4$]).subscribe({
      next: (value) => console.log('Combined -> ', value.join(' - ')),
      error: (error => console.log('combineLatest ERROR-> ',error)),
      complete: () => console.log('combineLatest has completed!'),
    });
  }
}
