import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    this.partition();
  }

  private partition() {
    /**
     * Create observable that emits values of 1 to 6 named source$
     * Use partition which uses source$ and a predicate function that checks if the value is odd or even
     * Store the return value of partition as evens$ and odds$ observables.
     * Subscribe to them and log the values.
     */

  }
}
