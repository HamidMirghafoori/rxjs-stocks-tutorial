import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { of, reduce } from 'rxjs';
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
    this.reduce();
  }

  private reduce() {
    /**
     * emit values of 1 to 5, apply reduce operator to calculate the sum of them
     * subscribe and log the result.
     */
    of(1, 2, 3, 4, 5)
      .pipe(reduce((acc, value) => acc + value, 0))
      .subscribe((result) => console.log(result));
  }
}
