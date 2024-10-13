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
    this.sampleTime();
  }

  private sampleTime() {
    /**
     * Create source$ which is interval of 1000 and log the value of source
     * Apply sample() on source$ with providing 2500 and take 5 values,
     * Subscribe and log the sampled values.
     * Observe how sample() works.
     */

  }
}
