import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { catchError, delay, of, timeout } from 'rxjs';
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
    this.timeout();
  }

  /**
   * This is simple task, we want to create an observable that emits 'Hello' and then waits for a long time
   * using timeout(3000) we throw an error and message the timeout error so this way we could complete the observable
   * Note that because we applied the logic for the first emission thus we won't see Hello logged. to fix that we need to use different approach.
   */
  private timeout() {
    of('Hello')
      .pipe(
        delay(200000),
        timeout(3000),
        catchError((error) => of('Error: ', error))
      )
      .subscribe((res) => console.log(res));
  }
}
