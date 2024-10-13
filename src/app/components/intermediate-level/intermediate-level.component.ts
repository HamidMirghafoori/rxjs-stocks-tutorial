import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { last, of } from 'rxjs';
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
    this.last();
  }

  private last() {
    /**
     * Emit values of 10,20,30,5
     * 1 - Apply last and subscribe to log the value
     * 2 - Emit same values and provide a predicate function to find last value bigger than 15
     * 3 - Emit same values and provide a predicate function to find last value bigger than 50,
     *     also provide default value 100
     * Observe which values are returned and how default value worked.
     */
    of(10, 20, 30, 5)
      .pipe(last())
      .subscribe((value) => console.log(value));

    of(10, 20, 30, 5)
      .pipe(last((value) => value > 15))
      .subscribe((value) => console.log(value));

    of(10, 20, 30, 5)
      .pipe(last((value) => value > 50, 100))
      .subscribe((value) => console.log(value));
  }
}
