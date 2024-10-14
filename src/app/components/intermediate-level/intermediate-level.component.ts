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
    this.raceWith();
  }

  private raceWith() {
    /**
     * 1 - Create obs1$ with interval of 7000, map it's value to get message 'slow one #' which # is the value
     * 2 - Create obs2$ with interval of 3000, map it's value to get message 'fast one #' which # is the value
     * 3 - Create obs3$ with interval of 5000, map it's value to get message 'medium one #' which # is the value
     * all three will take 5 values.
     * Apply raceWith to obs1$ and pass obs2$ and obs3$ as arguments. Subscribe and log the result
     * Note how only the fastest observable will be emitted til it completes.
     */

  }
}
