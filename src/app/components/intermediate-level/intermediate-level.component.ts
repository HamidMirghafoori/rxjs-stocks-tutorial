import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { distinctUntilChanged, of } from 'rxjs';
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
    this.distinctUntilChanged();
  }

  private distinctUntilChanged() {
    const source1$ = of(1, 2, 2, 3, 3, 3, 4, 1, 2, 2, 1);
    const source2$ = of(
      { id: 1, name: 'A' },
      { id: 2, name: 'B' },
      { id: 1, name: 'A' },
      { id: 1, name: 'C' },
      { id: 3, name: 'C' },
      { id: 3, name: 'C' }
    );
    /**
     * 1 - Apply distinctUntilChanged on source1$, subscribe and log the values
     * 2 - Apply distinctUntilChanged on source2$, pass comparator function which
     * simply checks if both values are equal, and pass keySelector function to
     * selects id for comparison, subscribe and log respectively
     * 3 - Same as question 2 but use name key for key selector
     */
    source1$
      .pipe(distinctUntilChanged())
      .subscribe((value) => console.log(value));

    console.log('Filter by id:');
    source2$
      .pipe(
        distinctUntilChanged(
          (prev, curr) => prev === curr,
          (value) => value.id
        )
      )
      .subscribe((value) => console.log(JSON.stringify(value)));
    console.log('Filter by name:');
    source2$
      .pipe(
        distinctUntilChanged(
          (prev, curr) => prev === curr,
          (value) => value.name
        )
      )
      .subscribe((value) => console.log(JSON.stringify(value)));
  }
}
