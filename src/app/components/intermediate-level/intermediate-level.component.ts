import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { delay, from, mergeScan, of } from 'rxjs';
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
    this.mergeScan();
  }

  private mergeScan() {
    /**
     * 1 - create a function and save it as fakeApiRequest it accepts two arguments
     * accumulatedTotal and id and returns observable from summing accumulatedTotal with
     * 100 if id===1, 250 if id===2, and 80 if id===3, default returns observable of accumulatedTotal itself
     * each return will have 1000ms delay
     * 2 - create ids$ observable from array of 1 to 3
     * 3 - apply mergeScan on ids$ by passing accumulator function with default 0 and concurrent = 1
     * Subscribe to ids$ and log the values
     * Note how it accumulates the values
     * Remove concurrent argument to see what happens?
     */
    const fakeApiRequest = (accumulatedTotal: number, id: number) => {
      switch (id) {
        case 1:
          return of(accumulatedTotal + 100).pipe(delay(1000));
        case 2:
          return of(accumulatedTotal + 250).pipe(delay(1000));
        case 3:
          return of(accumulatedTotal + 80).pipe(delay(1000));
        default:
          return of(accumulatedTotal).pipe(delay(10));
      }
    };

    const ids$ = from([1, 2, 3]);

    ids$
      .pipe(mergeScan((acc, value) => fakeApiRequest(acc, value), 0, 1))
      .subscribe((result) => console.log(result));
  }
}
