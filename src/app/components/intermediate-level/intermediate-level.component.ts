import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { defaultIfEmpty, interval, takeUntil } from 'rxjs';
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
    this.defaultEmpty();
  }

  private defaultEmpty() {
    const api$ = interval(5000);
    /**
     * Create data$ which waits for 3000 to receive value, 
     * and then apply defaultIfEmpty with a message that data didn't received
     * subscribe to it and log the data.
     * Change time to 6000 and observe the log
     */
    const data$ = api$.pipe(takeUntil(interval(3000)));
    const result$ = data$.pipe(defaultIfEmpty('No data from api$!'));
    result$.subscribe((x) => console.log(x));
  }
}
