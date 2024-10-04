import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  catchError,
  interval,
  mergeMap,
  of,
  throwError
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
    this.catchError2();
  }

  /**
   * we are continuing from throwError branch with minor changes
   * now we want to continue the interval from 0 again after the error occurs by returning caught observable
   * instead of the last value of -1,
   * update the code to utilize returning caught and getting rid of returned -1 value
   */
  private catchError2() {
    interval(1000)
      .pipe(
        mergeMap((value) => {
          if (value === 4) {
            return throwError(() => 'We hit number 4!');
          }
          return of(value);
        }),
        catchError((err, caught) => {
          console.log('Error caught: ', err);
          return caught;
        })
      )
      .subscribe((value) => console.log(value));
  }
}
