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
    this.combineLatest();
  }

  public combineLatest() {
    /**
     * define 4 observables as following:
     * source$1, interval of 100, take 20 and finalize with log that it has completed
     * source$2, interval of 500 with first delay of 1000, take 3 and finalize with log that it has completed
     * source$3, interval of 400, take 10 and finalize with log that it has completed
     * source$4, same as source$2 but it checks the values if value===2 then throws an error
     * then subscribe to all of them separately and log the value but comment them out.
     * use combineLatest to combine first 3 sources and subscribe to it with full signature 
     *   and proper message for each callback
     * Note how the values are emitted from combineLatest()
     */
 
  }
}
