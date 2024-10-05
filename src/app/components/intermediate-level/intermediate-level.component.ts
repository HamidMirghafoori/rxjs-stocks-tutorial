import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  catchError,
  from,
  interval,
  mergeMap,
  of,
  onErrorResumeNext,
  throwError,
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
  private weekDays$ = from(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);

  public ngOnInit(): void {
    this.log.clearLogs();
    this.onErrorResumeNext();
  }

  /**
   * we continue from the throwError branch for this task
   * For reaching to this goal we are going to implement onErrorResumeNext() operator
   * We want to emit week days when we encounter an error, so we can remove catchError() but
   * this will cause we never see the error message, so we keep it and try to log error first then continue 
   * Note that onErrorResumeNext() is stand-alone function and not an operator.
   */
  private onErrorResumeNext() {
    const source$ = interval(1000).pipe(
      mergeMap((value) => {
        if (value === 4) {
          return throwError(() => 'We hit number 4!');
        }
        return of(value);
      }),
      catchError((error)=>{
        console.log(error)
        return of(); // we need to return an empty observable because catchError needs a return an observable to keep stream continue
      })
    );

    onErrorResumeNext(source$, this.weekDays$).subscribe((value) =>
      console.log(value)
    );
  }
}
