import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { of, skipWhile } from 'rxjs';
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
    this.skipWhile();
  }

  private skipWhile() {
    /**
     * Create source$ which emits numbers 1 to 7 and apply skipWhile with a predicate function
     * which checks if the value is less than 4
     * Subscribe to source$ and log the values.
     * Note that all values before 4 will be skipped.
     */
    const source$ = of(1, 2, 3, 4, 5, 6, 7);

    source$.pipe(
      skipWhile(value => value < 4)
    ).subscribe(console.log);
  }

}
