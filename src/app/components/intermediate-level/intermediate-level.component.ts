import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { first, of } from 'rxjs';
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
    this.first();
  }

  private first() {
    /**
     * Emit values of 10,20,30
     * 1 - Apply first and subscribe to log the value
     * 2 - Emit same values and provide a predicate function to find first value bigger than 15
     * 3 - Emit same values and provide a predicate function to find first value bigger than 50,
     *     also provide default value 100
     * Observe which values are returned and how default value worked.
     */
    of(10, 20, 30)
      .pipe(first())
      .subscribe((value) => console.log(value));

    of(10, 20, 30)
      .pipe(first((value) => value > 15))
      .subscribe((value) => console.log(value));

    of(10, 20, 30)
      .pipe(first((value) => value > 50, 100))
      .subscribe((value) => console.log(value));
  }
}
