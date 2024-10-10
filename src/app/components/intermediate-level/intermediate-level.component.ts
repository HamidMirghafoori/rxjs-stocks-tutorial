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
    this.windowToggle();
  }

  private windowToggle() {
    /**
     * To understand the windowToggle functionality we modify bufferToggle code as following:
     * source$, toggle$, and openings$ are the same
     * In source$ observable subscription we replace bufferToggle with windowToggle
     * Same as all previous window observables we have to get the values from window$ observables to log them.
     * By subscribing to source$ you should see logs of source$ and when you first time click you should see
     * opening state becomes true (meaning buffering will start) and when you click again
     * you will see the opening state becomes false and closing state becomes true (meaning the buffering stops)
     * after that immediately all the emitted values between open and close will be logged as an array.
     * You can try open buffering and wait till source completes and observe the logged buffered values.
     */

  }
}
