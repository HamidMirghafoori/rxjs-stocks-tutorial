import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    this.buffer();
  }

  private buffer() {
    /**
     * Create a source$ observable to emit values every 100ms
     * To buffer values, define a bufferNotifier$ observable which emits every 1000ms,
     * The bufferNotifier$ will emit 10 signals
     * Finally, we will subscribe to the source$ observable to take 55 signals, 
     * we can tap and log the values of our stream
     * Apply the buffer() operator which controlled by bufferNotifier$,
     * and log the values returned by the buffer in subscribe.
     * Note how buffer collects the values and continues after each closingNotifier.
     */

  }
}
