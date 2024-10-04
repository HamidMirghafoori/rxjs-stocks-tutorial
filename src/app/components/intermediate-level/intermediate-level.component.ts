import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  catchError,
  interval,
  map,
  Observable,
  of
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
  public errorObservable$!: Observable<string>;
  public constructor(private log: LogService) {}

  public ngOnInit(): void {
    this.log.clearLogs();
    this.retry();
  }

  /**
   * we are continuing from catchError2 branch with minor changes
   * Currently we have an infinite loop of errors to avoid that
   * add retry(3) to repeat the subscription for three times
   * This time we want to use Javascript error throw function, so we replaced throwError with throw
   * note that because we are returning a value instead of observable (throwError is an observable) so we have to return value, not of(value)
   */
  private retry() {
    interval(1000)
      .pipe(
        map((value) => {
          if (value === 4) {
            console.log('Error happened....');
            throw 'We hit error 3 time!';
          }
          return value;
        }),
        catchError((err) => {
          console.log('Error caught: ', err);
          return of(-1);
        })
      )
      .subscribe((value) => console.log(JSON.stringify(value)));
  }
}
