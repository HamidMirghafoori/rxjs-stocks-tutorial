import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { fromEvent, timeInterval } from 'rxjs';
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
    this.timeInterval();
  }

  private timeInterval() {
    /**
     * Create click$ from click event on document.
     * Apply timeInterval on click$ and subscribe and log a message displaying the time passed since last click.
     */
    const click$ = fromEvent(document, 'click');
    click$
      .pipe(timeInterval())
      .subscribe((data) =>
        console.log(`Time since last click: ${data.interval}ms`)
      );
  }
}
