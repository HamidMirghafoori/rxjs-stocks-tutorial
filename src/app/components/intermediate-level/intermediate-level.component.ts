import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
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
    this.zip();
  }

  private zip() {
    const obs1$ = of(1, 2, 3, 4, 5);
    const obs2$ = of('A', 'B', 'C', 'D');
    const obs3$ = of(true, false, true);
    /**
     * The starting data is provided:
     * 1 - Pipe zipWith() to obs1$ and pass other two observables to it, subscribe to it and log the values
     * Note how zip completes when one of the observables completes.
     */

  }
}
