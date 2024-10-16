import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { concatAll, delay, of } from 'rxjs';
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
    this.concatAll();
  }

  private concatAll() {
    /**
     * Create higher order observable source$ by emitting three observables:
     * first emits 1 with delay 1000, second emits 2 with delay 500 and third emits 3 with delay 300
     * Apply concatAll to source$ and subscribe and log the values.
     * Note the order and timing of the logs
     */
    const source$ = of(
      of(1).pipe(delay(1000)),
      of(2).pipe(delay(500)),
      of(3).pipe(delay(300))
    );

    source$.pipe(concatAll()).subscribe(console.log);
  }
}
