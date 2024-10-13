import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { count, of } from 'rxjs';
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
    this.count();
  }

  private count() {
    const source$ = of(1, 2, 3, 4, 5, 11, 33, 55, 77, 100);
    /**
     * source$ is provided,
     * Apply count to count number of elements
     * Apply count with predicate function to count odd values
     */

    source$.pipe(count()).subscribe((value) => console.log('Total: ', value));

    source$
      .pipe(count((value) => value % 2 === 1))
      .subscribe((value) => console.log('Total odds: ', value));
  }
}
