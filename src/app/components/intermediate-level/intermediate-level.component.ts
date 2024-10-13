import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { of, skipLast } from 'rxjs';
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
    this.skipLast();
  }

  private skipLast() {
    /**
     * Create source$ which will emit numbers from 1 to 5
     * Apply skipLast to source$ to skip the last 2 emissions
     * Subscribe with complete function signature to source$ and log the values and complete message
     * Observe which values have been skipped.
     */
    const source$ = of(1, 2, 3, 4, 5);

    source$.pipe(skipLast(2)).subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Complete'),
    });
  }
}
