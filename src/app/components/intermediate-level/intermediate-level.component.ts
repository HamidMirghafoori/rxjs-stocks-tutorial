import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { every, of } from 'rxjs';
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
    this.every();
  }

  private every() {
    const source1$ = of(2, 4, 6, 8);
    const source2$ = of(2, 4, 5, 8);
    /**
     * 1 - Apply every to source1$ check if the value is even, subscribe and log the result
     * 2 - Apply every to source2$ check if the value is even, subscribe and log the result
     */

    source1$
      .pipe(every((value) => value % 2 === 0))
      .subscribe((result) => console.log(result));

    source2$
      .pipe(every((value) => value % 2 === 0))
      .subscribe((result) => console.log(result));
  }
}
