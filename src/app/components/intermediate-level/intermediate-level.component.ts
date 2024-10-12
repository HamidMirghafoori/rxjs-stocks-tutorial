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
    this.mergeScan();
  }

  private mergeScan() {
    /**
     * Suppose we are frequently checking an endpoint for new values
     * if endpoint takes more time than our interval we will discard that api call (cancel the call)
     * to do that we will modify mergeScan code 
     * We will add a log to our fakeApiRequest to log the current id
     * the delays will be 100, 600, 100, 10 respectively
     * our ids$ will be interval of 500 and we will take 8 values
     * Apply switchScan on ids$ by passing accumulator function with default 0
     * Subscribe to ids$ and log the values
     * Note how it accumulates the values and when fakeApiRequest takes too long it will discarded
     */
  
  }
}
