import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { debounceTime, fromEvent, take, tap } from 'rxjs';
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
    this.debounceTime();
  }

  private debounceTime() {
    /**
     * Define clicks$ as document click events and log the time click happened and position of click
     * then apply debounce() and provide 3000 as its argument, we can take 8 emissions from debounce
     * Subscribe to clicks$ and log the current time again and using received event log position of click
     * Note how click events ara logged and how debounce waits for 3 seconds of no emission then
     * emits the last click event. We used click positions to make it easier to understand which
     * events are pass through debounce and which ones discarded
     */
    const clicks$ = fromEvent(document, 'click').pipe(
      tap((event) =>
        console.log(
          'click at:',
          new Date().getSeconds(),
          'Position:',
          (event as MouseEvent).clientX,
          (event as MouseEvent).clientY
        )
      )
    );

    clicks$
      .pipe(debounceTime(3000), take(8))
      .subscribe((event) =>
        console.log(
          'Emitted click at: ',
          new Date().getSeconds(),
          'Position:',
          (event as MouseEvent).clientX,
          (event as MouseEvent).clientY
        )
      );
  }
}
