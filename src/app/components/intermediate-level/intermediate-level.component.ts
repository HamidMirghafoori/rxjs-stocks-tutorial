import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { fromEvent, interval, takeUntil } from 'rxjs';
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
    this.takeUntil();
  }

  private takeUntil() {
    /**
     * We want to take values until we click on document
     * Create a notifier$ which returns click event from document
     * Create an interval of 400 and apply takeUntil with notifier$ as argument
     * Subscribe with complete function signature to log Taken data and completion of observable.
     */
    const notifier$ = fromEvent(document, 'click');

    interval(400)
      .pipe(takeUntil(notifier$))
      .subscribe({
        next: (takenData) => console.log('Taken data: ', takenData),
        complete: () => console.log('Interval completed!'),
      });
  }
}
