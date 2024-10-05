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
    this.catchError();
  }

  /**
   * create errorObservable$ with assigning it to endpoint getError() from dataService
   * handle errorObservable$ error with catchError()
   * for now just log the error name and message: note error object has following interface
   * {name: string, error: string, ....}
   */
  private catchError() {
    this.errorObservable$ = this.dataService.catchError().pipe(
      catchError((err) => {
        return of(`${err.name} - ${err.error}`);
      })
    );
    this.errorObservable$.subscribe((response) => console.log(response));
  }
}
