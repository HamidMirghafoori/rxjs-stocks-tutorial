import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { catchError, delay, Observable, of, retryWhen, take, tap } from 'rxjs';
import { DataService, LogService } from '../../services';
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
  public constructor(private log: LogService, private dataService: DataService) {}

  public ngOnInit(): void {
    this.log.clearLogs();
    this.finalize();
  }

  /**
   * we use the final code of retryWhen branch as our starting point with some minor changes. Now we have a failing api call which we retry 3 times and still failing.
   * We want after the observable finishes, no matter if it fails or succeeds to perform extra task, in this case just a simple log.
   * We want to track number of retries and log the number. We create a attribute named retries and will increase it on every retry. 
   * Note that we can't increment the value of retries in the catchError part because every time error happens
   * catchError() will complete the stream and will redirect to finalize() and the retires will set to 0 again. 
   * We need to use finalize() operator after catchError().
   */
  private finalize() {
    this.errorObservable$ = this.dataService.catchError().pipe(
      retryWhen((errors) =>
        {
          return errors.pipe(
            tap((err) => console.log(`Error occurred: ${err.name} - ${err.error}`)
            ),
            delay(1000),
            take(3)
          );
        }
      ),
      catchError((err) => {
        return of(`${err.name} - ${err.error}`);
      }),

    );
    this.errorObservable$.subscribe((response) => console.log(response));
  }
}
