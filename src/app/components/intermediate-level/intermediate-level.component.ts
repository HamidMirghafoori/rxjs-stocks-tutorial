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
    this.auditTime();
  }

  private auditTime() {
    /**
     * Create source$ observable which is interval of 500
     * Create result$ using source$ which auditTime is applied with 2000ms
     * Take 5 signals to avoid infinite emissions.
     * Subscribe to result$ and log the values
     * Note how the values are discarded and only the last value of each audit will be emitted
     */

  }
}
