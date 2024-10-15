import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
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
    this.pipe();
  }

  private pipe() {
    const numbers$ = of(1, 2, 3, 4, 5);
    /**
     * use pipe on numbers$ provide a function which catches the value emitted from numbers$ and
     * subscribe to the value and log the values with a message to identify message comes from which log
     * then subscribe to numbers$ too and log its values too (with a message to identify the log)
     * Note how pipe emits the original observable, so we have access to it to perform more transformation on data
     */

  }
}
