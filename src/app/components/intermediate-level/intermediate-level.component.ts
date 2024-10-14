import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { findIndex, of } from 'rxjs';
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
    this.findIndex();
  }

  private findIndex() {
    const numbers$ = of(10, 20, 30, 40, 50, 60, 70);

    /**
     * 1- find the first value bigger than 40 and log the result
     * 2 - find the fist value bigger than 90 and log the result
     */
    numbers$
      .pipe(findIndex((value) => value > 40))
      .subscribe((result) => console.log(result));

    numbers$
      .pipe(findIndex((value) => value > 90))
      .subscribe((result) => console.log(result));
  }
}
