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
  private clickCount = 0;

  public ngOnInit(): void {
    this.log.clearLogs();
    this.bufferToggle();
  }

  private bufferToggle() {
    /**
     * To understand the bufferToggle functionality we design the following:
     * 1 - create source$ observable that is interval of 200ms
     * 2 - crate toggle$ observable which is basically an event from click on document
     * 3 - create openings$ observable which uses toggles$ signal to increment clickCounts and applies filter()
     *     to filter clicks when clickCount is odd. You can add a log for debugging like:
     *     ('opening = ', ***) *** is the return value from filter()
     * 4 - Use source$ observable to take 50 signals, use tap to log the value of signal, then apply bufferToggle
     *     first argument will be openings$ and second will be a function which filters toggle$ when clickCount is even
     *     you can log closing state same as opening.
     * By subscribing to source$ you should see logs of source$ and when you first time click you should see
     * opening state becomes true (meaning buffering will start) and when you click again
     * you will see the opening state becomes false and closing state becomes true (meaning the buffering stops)
     * after that immediately all the emitted values between open and close will be logged as an array.
     * You can try open buffering and wait till source completes and observe the logged buffered values.
     */
   
  }
}
