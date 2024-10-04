import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { catchError, interval, mergeMap, of, throwError } from 'rxjs';
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
    this.throwError();
  }

  /**
   * we have an interval of 1 seconds, we want to throw error at 5th second
   * we will log a message and then as the last value for error state we will emit -1
   * and then the stream will be completed
   * note that because we wanted to use throwError() operator and map() is expected to return only value and throwError() is an observable.
   * Thus to have throwError in our code we have to use mergeMap to return observable of(value)
   */
  private throwError() {
    interval(1000)
      .pipe(
        mergeMap((value) => {
          if (value === 4) {
            return throwError(() => 'We hit number 4!');
          }
          return of(value);
        }),
        catchError((err) => {
          console.log('Error caught: ', err);
          return of(-1);
        })
      )
      .subscribe((value) => console.log(value));
  }
}
