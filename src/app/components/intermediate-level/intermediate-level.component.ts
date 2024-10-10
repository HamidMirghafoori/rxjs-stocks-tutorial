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
    this.window();
  }

  private window() {
    /**
     * Create a source$ observable to emit values every 100ms
     * To buffer values, define a bufferNotifier$ observable which emits every 1000ms,
     * The bufferNotifier$ will emit 10 signals
     * Finally, we will subscribe to the source$ observable to take 55 signals,
     * we can tap and log the values of our stream
     * Apply the window() operator which controlled by bufferNotifier$,
     * To convert each observable into array of values use mergeMap() in combination of toArray()
     * Subscribe to source$ and log the buffered data. 
     * Note how buffer collects the values and continues after each closingNotifier.
     * Also note that here we used mergeMap to get access to values 
     * but in your pipeline you may perform other changes to each window if needed
     */

  }
}
