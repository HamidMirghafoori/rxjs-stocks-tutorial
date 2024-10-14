import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { elementAt, of } from 'rxjs';
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
    this.elementAt();
  }

  private elementAt() {
    /**
     * 1 - Emit values from 1 to 5, apply elementAt with index 2, subscribe with complete function signature
     *    and log the value
     * 2 - Emit values from 1 to 5, apply elementAt with index 8, provide default value -1
     * Subscribe with complete function signature and log the values.
     */
    of(1, 2, 3, 4, 5)
      .pipe(elementAt(2))
      .subscribe({
        next: (value) => console.log(value),
        error: (err) => console.error(err),
        complete: () => console.log('Complete'),
      });

    of(1, 2, 3, 4, 5)
      .pipe(elementAt(8, -1))
      .subscribe((value) => console.log(value));
  }
}
