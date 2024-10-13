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
    this.skipUntil();
  }

  private skipUntil() {
    /**
     * Create source$ with interval of 100 and notifier$ with interval of 600
     * Apply skipUntil to source$ with notifier$ as argument, and take 7 values
     * Subscribe to source$ and log the values.
     * Note how many values are skipped.
     */

  }
}
