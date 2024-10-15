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
    this.EMPTY();
  }

  private EMPTY() {
    /**
     * Create interval$ observable that intervals by 100
     * Create result by mergeMap value which conditionally returns value if it is odd or EMPTY
     * Take 10 values
     * Subscribe with complete function signature and log values and complete message
     * Observe how EMPTY causes the values get ignored
     */

  }
}
