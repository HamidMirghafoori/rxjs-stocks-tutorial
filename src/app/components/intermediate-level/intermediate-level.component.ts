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
    this.single();
  }

  private single() {
    /**
     * Emit values of 10,20,30,5 for question 1 to 3 and subscribe with complete function signature:
     * 1 - Apply single and provide a predicate function to find last value bigger than 20
     * 2 - Apply single and provide a predicate function to find last value bigger than 10
     * 3 - Apply single and provide a predicate function to find last value bigger than 50
     * 4 - Apply single to empty observable of(), 
     * 
     * Observe returned value and different types of errors:
     */

  }
}
