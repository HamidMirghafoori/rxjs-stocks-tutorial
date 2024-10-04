import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { catchError, Observable, of } from 'rxjs';
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
  public constructor(
    private log: LogService,
    private dataService: DataService
  ) {}

  public ngOnInit(): void {
    this.log.clearLogs();
    this.retryWhen();
  }
  /**
   * we use the final code of catchError branch as our starting point. We want to make api call infinitely, for that we will use retryWhen() operator
   * to limit our api calls to 3, then we add take() operator to limit number of retries.
   * Note that currently retryWhen() is marked as deprecated, in next versions of RxJS retry() operator will support options to perform the same job.
   */
  private retryWhen() {
    this.errorObservable$ = this.dataService.catchError().pipe(
      catchError((err) => {
        return of(`${err.name} - ${err.error}`);
      })
    );
    this.errorObservable$.subscribe((response) => console.log(response));
  }
}
